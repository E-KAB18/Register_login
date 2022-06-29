import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import ImgMediaCard from "./component/main";

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      {user && <Route path="/" element={<ImgMediaCard />} />}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

export default App;
