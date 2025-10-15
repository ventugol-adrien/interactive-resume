import logo from "./assets/logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobFetcher } from "./components/JobFetcher";

const App: React.FC = () => {
  return (
    <>
      <div>
        <img className="logo" src={logo} alt=" Interactive Resume logo" />
      </div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/:id" element={<JobFetcher />} />
          <Route path="/" element={<JobFetcher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
