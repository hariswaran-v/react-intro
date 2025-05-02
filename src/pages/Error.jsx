import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="mt-10 bg-red-500 max-w-xl mx-auto p-10 text-white rounded">
      <h4 className="font-bold text-lg">
        #{status} - Oops! {statusText}
      </h4>
      <p>
        Sorry, something went wrong{" "}
        <Link to="/" className="underline">
          You can go back here!
        </Link>
      </p>
    </div>
  );
};
export default ErrorPage;
