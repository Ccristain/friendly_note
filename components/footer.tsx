import FriendlyNoteLogo from "@/components/gen_components/logo";

export default function Footer() {
  return (
    <footer className="w-full h-60 bg-yellow-200 shadow-md px-6 py-4 my-4 flex mb-4 rounded-2xl mx-auto relative flex-col gap-y-4 justify-evenly">
      <div className="flex justify-evenly w-full  text-base">
        <ul className="footanari">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="footanari">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
        <ul className="footanari">
          <li>
            <a href="#">Job Opportunities</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
      </div>
      <p className="text-center text-sm font-medium">
        © 2026 Friendly Note. All Rights Reserved.
      </p>
    </footer>
  );
}
