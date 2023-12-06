import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <main className="col-span-4 lg:col-span-3 container mx-auto ">
      <Outlet />
    </main>
  );
}
