import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      dispatch(signInStart());
      e.preventDefault();
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } 
    catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign In!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />

        <button
          className="bg-slate-600 text-white rounded-lg p-3 
                    cursor-pointer hover:opacity-90 transition-all
                    disabled:opacity-75"
          disabled={loading}
        >
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Don't Have an Account?</p>
        <Link to="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </div>
      <p className="text-red-500 mt-5">{error ? error.message || "Something Went Wrong" : ""}</p>
    </div>
  );
}
