import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ViewChecklistsPage } from "./components/pages/ViewChecklistsPage";

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
