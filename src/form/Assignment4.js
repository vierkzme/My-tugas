import { useState, useEffect } from "react";

const Assignment4 = () => {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    availability: "",
    age: "",
    location: "",
    experience: "",
    email: "",
  });

  const [tempProfile, setTempProfile] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const storedProfile = {
      name: localStorage.getItem("name") || "Ardy Nugroho",
      role: localStorage.getItem("role") || "Front End Developer",
      availability: localStorage.getItem("availability") || "Full Time",
      age: localStorage.getItem("age") || "20",
      location: localStorage.getItem("location") || "Depok, Indonesia",
      experience: localStorage.getItem("experience") || "2",
      email: localStorage.getItem("email") || "ardyiv99@gmail.com",
    };
    setProfile(storedProfile);
    setTempProfile(storedProfile);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEdit = () => {
    setTempProfile(profile);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(tempProfile);
    Object.keys(tempProfile).forEach((key) => {
      localStorage.setItem(key, tempProfile[key]);
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prevTempProfile) => ({
      ...prevTempProfile,
      [name]: value,
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">My App</h1>
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex lg:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 lg:mt-0 lg:items-center lg:justify-end`}
        >
          {["Home", "Product", "Gallery", "Blog", "My Inventory"].map(
            (item) => (
              <li
                key={item}
                className="text-gray-100 hover:text-blue-600 lg:mt-0 mt-2"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="container mx-auto mt-8 p-4">
        <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
            {/* Profile Image */}
            <img
              alt="Profile picture"
              className="h-24 w-24 rounded-full border-4 border-white object-cover mt-4 lg:mt-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
            />

            {/* Profile Details */}
            <div className="flex-1 text-white mt-6 lg:mt-8 text-center lg:text-left">
              <div className="mb-4">
                <h3 className="text-2xl font-bold">{profile.name}</h3>
                <p className="text-gray-400">{profile.role}</p>
              </div>
              <div className="flex justify-center lg:justify-start gap-2 mt-3">
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                >
                  Edit
                </button>
                <button className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
                  Resume
                </button>
              </div>
            </div>
            {/* Profile Information */}
            {!isMobile && (
              <div className="grid grid-cols-1 gap-y-2 text-sm me-10">
                {Object.entries(profile).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-100 capitalize me-10 pe-10">
                      {key}
                    </span>
                    <span className="text-gray-400 me-10 pe-10">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* disini */}
          {isMobile && (
            <div className="mt-4 bg-gray-800 text-white p-4 rounded-md">
              <h4 className="text-lg font-bold mb-2">Profile Information</h4>
              <ul className="space-y-2">
                {Object.entries(profile).map(([key, value]) => (
                  <li key={key} className="flex justify-between text-sm">
                    <span className="capitalize">{key}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Form */}
        {isEditing && (
          <div className="mt-6 bg-gray-800 shadow-md rounded-lg p-6">
            <h5 className="text-gray-100 text-xl font-bold mb-4">
              Edit Profile
            </h5>
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.keys(tempProfile).map((key) => (
                <div key={key}>
                  <label className="text-gray-100 block text-sm font-medium capitalize mb-1">
                    {key}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={tempProfile[key]}
                    onChange={handleChange}
                    placeholder="Input..."
                    className="bg-black text-white w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignment4;
