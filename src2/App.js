import Create from "./create";
import CreateWebForm from "./Component/WebForm";
import "./App.css";
import CreateInput from "./Component/CreateInput";
import BirthDate from "./Component/BirthDate";
import Logo from "./Component/logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <CreateWebForm />
      <CreateInput />
      <BirthDate />
    </div>
  );
}

export default App;
