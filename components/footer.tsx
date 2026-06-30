import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-60 bg-yellow-200 shadow-md px-6 py-4 my-4 flex mb-4 rounded-2xl mx-auto relative flex-col gap-y-4 justify-evenly">
      <div className="flex justify-evenly w-full  text-base">
        <ul className="footanari">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
        <ul className="footanari">
          <li>
            <Link href="/privacy_policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms & Conditions</Link>
          </li>
        </ul>
        <ul className="footanari">
          <li>
            <Link href="#">Job Opportunities</Link>
          </li>
          <li>
            <Link href="#">Blogs</Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-sm font-medium">
        © 2026 Friendly Note. All Rights Reserved.
      </p>
    </footer>
  );
}
