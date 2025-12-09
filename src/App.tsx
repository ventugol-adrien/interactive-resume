import logo from "./assets/logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobFetcher } from "./components/JobFetcher";
import { MobileProvider } from "./contexts/MobileProvider";

const App: React.FC = () => {
  return (
    <>
      <div>
        <img className="logo" src={logo} alt=" Interactive Resume logo" />
      </div>
      <MobileProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/:id" element={<JobFetcher />} />
            <Route path="/" element={<JobFetcher />} />
          </Routes>
        </BrowserRouter>
      </MobileProvider>
    </>
  );
};

export default App;
