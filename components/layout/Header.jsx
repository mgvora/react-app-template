import Link from "next/link";

export default function Header(params) {
  return (
    <header className="border-b py-2 bg-orange-100">
      <div className="flex justify-between px-4 max-w-6xl mx-auto">
        <Link href={"/"}>LOGO</Link>
        <div>Login</div>
      </div>
    </header>
  );
}
