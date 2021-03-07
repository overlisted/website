const ErrorPage = ({ code }) =>
  <div className="p-12 my-auto shadow-xl flex-col items-center bg-white">
    {code
      ? <>
          <span className="text-xl">{code}</span>
          An error occurred on the server.
        </>
      : <span className="text-xl">An error occurred.</span>
    }
  </div>;

export default ErrorPage;
