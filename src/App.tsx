import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
