import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img className="w-24 rounded-full self-center cursor-pointer object-cover" src={currentUser.profilePicture} alt=""/>
        <input
          defaultValue={currentUser.username}
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          defaultValue={currentUser.email}
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
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 transition-all disabled:opacity-75">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}
