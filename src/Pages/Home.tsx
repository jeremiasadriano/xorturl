import Main from "../components/main/Main";
import NavBar from "../components/navbar/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <NavBar />
      <Main />
    </div>
  );
}
