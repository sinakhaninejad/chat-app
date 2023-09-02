import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/chat-app">
          <Route index element={<HomePage />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="forgotpassword" element={<ForgotPassword />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Pages;
