import User from "../../models/user.model";
export const generateAccessRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });

    return { refreshToken, accessToken };
  } catch (error) {
    throw new Error(error);
  }
};
