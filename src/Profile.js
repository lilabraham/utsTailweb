import React, { useState } from "react";
import Footer from "./Footer";
import Navbars from "./Navbars";

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Iqra Manaqibal Atqiya");
  const [jobTitle, setJobTitle] = useState("Web Developer");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/showroom-employee-helping-senior-woman-choosing-bag-shopping-casual-wear-modern-boutique-elderly-customer-buying-fashionable-merchandise-trendy-accessories-fashion-concept_482257-63120.jpg?w=1800&t=st=1699943349~exp=1699943949~hmac=df57b15b2e610d43073e14ffb5679327789a4681a34fdf9084165c9ed652c2a0")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex flex-col"
    >
      <Navbars />
      <div className="flex flex-col items-center p-40 md:px-8 lg:px-16 xl:px-24 flex-1">
        <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Picture"
              className="w-24 h-24 mx-auto rounded-full"
            />
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-2xl font-semibold mt-4"
                />
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="text-gray-500"
                />
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-semibold mt-4">{name}</h1>
                <p className="text-gray-500">{jobTitle}</p>
              </div>
            )}
          </div>
          {isEditing ? (
            <button
              className="bg-blue-500 text-white rounded-md p-2 mt-4"
              onClick={handleSaveClick}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white rounded-md p-2 mt-4"
              onClick={handleEditClick}
            >
              Edit Profil
            </button>
          )}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="mt-2">
              hello, I am a student who is pursuing an education that is getting
              more and more difficult.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-2">
              <li>Email: manaqibaliqro@gmail.com</li>
              <li>Phone: +62 89501181894</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="h-8 block">
        <Footer />
      </footer>
    </div>
  );
}

export default ProfilePage;
