const TheNavbar = () => {
  return (
    <div className="bg-indigo-500 text-white px-10 py-5 flex items-center justify-between">
      <h4 className="font-semibold text-xl">Navbar</h4>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>About</li>
        <li>Pages</li>
      </ul>
    </div>
  );
};

export default TheNavbar;
