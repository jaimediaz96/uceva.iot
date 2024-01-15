import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
