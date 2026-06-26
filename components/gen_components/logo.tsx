import Image from "next/image";

export default function FriendlyNoteLogo() {
  return (
    <div className="w-1/4 flex items-center">
      <Image
        src="/assets/fn_logo.png"
        alt="Friendly Note Logo"
        width={140}
        height={36}
        className="object-contain"
      />
    </div>
  );
}
