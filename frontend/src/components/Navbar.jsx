function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-semibold text-white tracking-wide cursor-pointer
                       transition-opacity duration-300 hover:opacity-90">
          📘 Book Manager
        </h1>

        {/* Menu */}
        <ul className="flex gap-10 text-sm font-medium text-indigo-100">
          {["Home", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              <span className="transition-colors duration-300 group-hover:text-white">
                {item}
              </span>

              {/* underline animation */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white
                           transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;