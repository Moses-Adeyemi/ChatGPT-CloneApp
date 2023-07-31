

const Header = () => {
  return (
    <header className="py-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
     
      <div className="flex justify-center mt-4 mb-4">
      <h1 className="text-3xl font-bold mr-24 ">ChatGPT Clone App</h1>
        <button className="bg-white text-black rounded-md px-4 py-2 mr-2">Sign In</button>
        <button className="bg-black text-white rounded-md px-4 py-2">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
