type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";


export default function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        loadUser(userName)
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-700 w-[400px] h-[200px] rounded-md flex-col justify-center items-center shadow-md ">
        <h2 className="text-center text-2xl font-bold text-white pt-8 pb-2">
          Busque por um usuário:
        </h2>
        <p className="text-center text-gray-300 lg:text-lg text-sm pb-5">
          Conheça seus melhores repositórios
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Digite o nome do usuário"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-1 w-56 rounded-md outline-none mx-1 shadow-md"
          />
          <button
            onClick={() => loadUser(userName)}
            className="bg-purple-500 hover:bg-purple-600 duration-700 py-2 px-6 rounded-md mx-0 shadow-md outline-none"
          >
            <BsSearch className="text-white font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
}
