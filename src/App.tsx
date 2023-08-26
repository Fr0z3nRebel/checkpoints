import Footer from "./mainComponents/Footer";
import Header from "./mainComponents/Header";
import Checklist from "./components/checklist/Checklist";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Checklist title="To Do" />
      <Checklist title="Shopping" />
      <Checklist />
      <Footer />
    </div>
  );
}
