import TopBar from "./components/topbar/TopBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const user= true;
  return (
    <BrowserRouter>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" replace="true"/> : <Login />} />
        <Route path="/register" element={ user ? <Navigate to="/" replace="true"/>  : <Register />}/>
        <Route path="/write" element={user ? <Write /> : <Navigate to="/register" />} />
        <Route path="/settings" element={user ? <Settings /> : <Navigate to="/register" />} />
        <Route path="/post/:id" element={<Single />} />

       

          
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
