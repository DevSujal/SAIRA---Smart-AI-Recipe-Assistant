import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main className="flex items-center justify-center h-screen bg-gray-900">
    
    <div className="flex gap-4">
      <Link href="/login">
      <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-md" >Login</button>
      </Link>
    </div>
  </main>
  );
}
