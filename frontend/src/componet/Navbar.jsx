function Navbar() {
  return (
    <div className="w-full bg-gray-200 px-10 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">LOGO</h1>
      <ul className="flex gap-8 text-sm font-medium">
        <li className="cursor-pointer">HOME</li>
        <li className="cursor-pointer">ABOUT</li>
        <li className="cursor-pointer">CONTACT</li>
      </ul>
    </div>
  );
}

export default Navbar;
