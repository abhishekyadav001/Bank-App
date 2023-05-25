import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Routes/Mainroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
