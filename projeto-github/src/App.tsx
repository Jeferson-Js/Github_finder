import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <h1 className=" text-center py-5 text-transparent font-bold text-3xl capitalize bg-gradient-to-t from-purple-600 to-dark bg-clip-text animate-pulse">
        github finder
      </h1>
      <Outlet />
    </div>
  );
}
