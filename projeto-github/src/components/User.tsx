import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

export default function User({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <div className="grid grid-cols-1 justify-items-center m-2 shadow-md">
      <div className="w-[400px] h-[380px] bg-gray-700 py-7 rounded-md">
        <img
          src={avatar_url}
          alt={login}
          className="w-[150px] h-[150px] rounded-full flex mx-auto cursor-pointer hover:scale-125 duration-500 "
        />
        <h2 className="text-center text-white py-2">{login}</h2>
        {location && (
          <p className="flex justify-center items-center gap-2">
            <MdLocationPin className="text-red-400" />
            <span className="text-white pb-2">{location}</span>
          </p>
        )}
        <div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-white capitalize pb-2">seguidores :</p>
            <p className="bg-red-400 py-0 px-2 rounded-full text-white">{followers}</p>
          </div>
          <div className="flex justify-center items-center gap-2 pb-6">
            <p className="text-white capitalize">seguindo :</p>
            <p className="bg-green-300 py-0 px-2 rounded-full text-white">{following}</p>
          </div>
        </div>
        <div className="flex justify-center">
        <span className="py-2 px-5 bg-purple-400 hover:bg-purple-500 duration-700 text-white font-semibold rounded-full shadow-md ">
        <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </span>
        </div>
      </div>
    </div>
  );
}
