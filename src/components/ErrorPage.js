import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col mx-auto w-6/12 p-10 justify-center space-y-3">
      <h1 className="font-bold text-2xl mt10">Connection Error</h1>
      <p className=" text-[#707377]">Please check your internet connection.</p>
      <Link to="/">
        <button className="p-1 mt-2 mx-1 font- border shadow-sm rounded-md bg-white hover:bg-gray-50">
          Reload
        </button>
      </Link>
      <h1 className="font-bold text-2xl mt10">{err.status}</h1>
      <h1 className="font-bold text-2xl mt10">{err.statusText}</h1>
    </div>
  );
};

export default ErrorPage;
