import { Link } from "react-router-dom";

const NoPage = () => {
  return (
      <div className="d-flex flex-column align-items-center">
          <div className="container d-flex justify-content-center mt-5">
              <h1 className="display-3">THIS PAGE DOES NOT EXIST</h1>
          </div>
          <Link className="display-3" to={"/"}>
              Go to home <i class="fa-solid fa-rotate-left display-5"></i>
          </Link>
      </div>
  );
}

export default NoPage