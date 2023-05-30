// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" id="error-page">
      <h1 className="display-3 fw-bolder">Oops!</h1>
      <p className="fs-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-muted">
        {/* {error.statusText || error.message} */}
        Page not found.
      </p>
    </div>
  );
}
