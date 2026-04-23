import Greeting from "./components/greeting/Greeting";
import Counter from "./components/counter/Counter";
import UserProfile from "./components/userProfile/UserProfile";

export default function App() {
  return (
    <>
      <div className="align">
        <Greeting name="Salem" />
        <Counter />
        <UserProfile id={3} />
      </div>
    </>
  );
}
