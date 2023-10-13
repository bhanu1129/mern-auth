import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up!</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
        />

        <button
          className="bg-slate-600 text-white rounded-lg p-3 
                    cursor-pointer hover:opacity-90 transition-all
                    disabled:opacity-75">
          Sign Up
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Already Have an Account?</p>
        <Link to='/sign-in' className="text-blue-500">Sign In</Link>
      </div>
    </div>
  );
}
