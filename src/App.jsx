import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Login from "./layout/Login";
import FormularioLogin from "./pages/FormularioLogin";
import FundamentoUseEffect from "./pages/FundamentoUseEffect";
import FundamentoUseState from "./pages/FundamentoUseState";
import FundamentosCustomHooks from "./pages/FundamentosCustomHooks.jsx";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin/>}/>
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
          <Route path="usestate" element={<FundamentoUseState />} />
          <Route path="useffect" element={<FundamentoUseEffect />} />
          <Route path="customHooks" element={<FundamentosCustomHooks/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App