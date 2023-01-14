import logo from "../images/logo.svg";
function NavBar() {
  return (
    <header className="sticky top-0 z-10 w-full border-2 border-red-500 bg-white p-4">
      <div className="mx-auto flex w-[80%] items-center justify-between">
        <img src={logo} className="" alt="" />
        <ul className="flex gap-5 font-light text-gray-400 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <button className="rounded-full bg-gradient-to-r from-limeGreen to-brightCyan py-2 px-4 text-white">
          Request Invite
        </button>
      </div>
    </header>
  );
}
export default NavBar;
