import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CandidateScreen } from "../components/candidate/CandidateScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { ResultScreen } from "../components/result/ResultScreen";
import { WelcomeScreen } from "../components/welcome/WelcomeScreen";
import { VoteScreen } from "../components/vote/VoteScreen";
import { NavBarClient } from "../layouts/NavBarClient/NavBarClient";
import { NavBarAdmin } from "../layouts/NavBarAdmin/NavBarAdmin";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarClient />}>
          <Route path="login" element={<LoginScreen />} />
          <Route path="inicio" element={<WelcomeScreen />} />
          <Route path="votar" element={<VoteScreen />} />
          <Route path="candidatos" element={<CandidateScreen />} />
          <Route path="resultados" element={<ResultScreen />} />
          <Route index element={<Navigate to={"/login"} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>

        <Route path="dashboard" element={<NavBarAdmin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
