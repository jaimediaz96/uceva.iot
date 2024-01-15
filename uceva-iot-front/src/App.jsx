import { BrowserRouter } from "react-router-dom"
import { UcevaIotProvider } from "./Context/UcevaIotContext";
import AppRoutes from "./Routes/AppRoutes";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

function App() {

  return (
    <UcevaIotProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </UcevaIotProvider>
  );
}

export default App;
