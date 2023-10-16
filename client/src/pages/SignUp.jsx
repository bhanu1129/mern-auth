import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      setError(false);
      e.preventDefault();
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
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
          {loading ? "Loading" : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Already Have an Account?</p>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
      <p className="text-red-500 mt-5">{error && "Something Went Wrong"}</p>
    </div>
  );
}
