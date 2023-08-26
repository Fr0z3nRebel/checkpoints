import Footer from "./mainComponents/Footer";
import Header from "./mainComponents/Header";
import Checklist from "./components/checklist/Checklist";

import "./App.css";
import { ViewChecklistsPage } from "./components/pages/ViewChecklistsPage.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div id="page">
        <ViewChecklistsPage />
      </div>
      <Footer />
    </div>
  );
}
