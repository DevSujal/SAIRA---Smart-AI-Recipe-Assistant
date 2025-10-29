import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "./models/user.model";
import bcrypt from "bcrypt";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        try {
          const { email, password, userName } = credentials;
          const user = await User.findOne({ $or: [{ email }, { userName }] });
          if (!user) {
            throw new Error("User Not Found"); // return null if the user is not found
          }

          if(user.isOauth) {
            throw new Error("You will have to signin with google or github");
          }

          if (!user.isPasswordCorrect(password)) {
            throw new Error("Invalid password!"); // correct password check
          }

          // Ensure you're returning an object with user properties
          return {
            id: user._id,
            email: user.email,
            name: user.userName,
            image: user.image,
          };
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Append user data to the JWT token
      // console.log(user);
      if (user) {
        token.userName = user.name; // Add username to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Add username to the session object
      session.user.name = token.userName; // Append username to the session
      return session;
    },

    async signIn({ profile }) {
      try {
        const { email, name } = profile;

        const user = await User.findOne({ email });
        const password = await bcrypt.hash(email, 10);
        if (!user) {
          const newUser = new User({
            email,
            userName: name,
            password,
            isOauth : true,
          });
          await newUser.save();
        }
        return true;
      } catch (error) {
        console.error(error);
        return false
      }
    },
  },
});
