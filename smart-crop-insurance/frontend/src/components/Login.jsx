import React from "react";
import Modal from "./Modal";

const Login = ({ isOpen, onClose, switchToSignup }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Login</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-gray-600">
        Don’t have an account?{" "}
        <span
          onClick={switchToSignup}
          className="text-green-700 font-semibold cursor-pointer hover:underline"
        >
          Create one
        </span>
      </p>
    </Modal>
  );
};

export default Login;
