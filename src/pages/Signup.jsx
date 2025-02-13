import React, { useState } from "react";

const Signuppage = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setpassword] = useState("");
  let [confirmPassword, setConfirm] = useState("");

  const regexpatterns = {
    firstName: /^[A-Z][a-zA-Z-' ]{1,49}$/,
    lastName: /^[A-Z][a-zA-Z-' ]{1,49}$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
  };

  let [errorFname, setErrorFname] = useState("");
  let [errorLname, setErrorLname] = useState("");
  let [errorPass, setErrorPass] = useState("");
  let [errorCpass, setErrorCpass] = useState("");

  function handleError() {
    if (regexpatterns.firstName.test(firstName)) {
      setErrorFname("");
    } else {
      setErrorFname("Enter First Name");
    }

    if (regexpatterns.lastName.test(lastName)) {
      setErrorLname("");
    } else {
      setErrorLname("Enter Last Name");
    }

    if (regexpatterns.password.test(password)) {
      setErrorPass("");
    } else {
      setErrorPass("Enter Correct Password");
    }

    if (password === confirmPassword) {
      setErrorCpass("");
    } else {
      setErrorCpass("Please Confirm Password");
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700"> First Name </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p className="text-red-500 text-sm">{errorFname}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700"> Last Name </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setLastName(e.target.value)}
        />
        <p className="text-red-500 text-sm">{errorLname}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700"> Password </label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setpassword(e.target.value)}
        />
        <p className="text-red-500 text-sm">{errorPass}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700"> Confirm Password </label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <p className="text-red-500 text-sm">{errorCpass}</p>
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        onClick={() => handleError()}
      >
        Submit
      </button>
    </div>
  );
};

export default Signuppage;
