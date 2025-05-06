import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="h-dvh flex flex-col">
      <nav>This is navigation bar</nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>This is footer</footer>
    </div>
  );
};

export default HomeLayout;
