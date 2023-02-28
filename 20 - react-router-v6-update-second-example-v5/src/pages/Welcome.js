import { Link, Outlet, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to={"new-user"}>new user</Link>

      {/* placeholder som säger vart nested routes ska bli inserted */}
      <Outlet />
    </section>
  );
};

export default Welcome;
