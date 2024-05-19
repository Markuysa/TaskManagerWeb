import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import SignUp from './pages/signUp';
import MainPage from './pages/main_page';
import GetIntoPage from './pages/login';
import { Navigate } from "react-router-dom";
import {createContext, useState} from "react";
import ContentPage from "./pages/contentPage";
import TasksContent from "./components/content/tasksContent";
import ComingSoonContent from "./components/content/comingSoon";
import TeamPageContent from "./components/content/teamContent";
import SettingsContent from "./components/content/settingsContent";
export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/"  element={<MainPage/>}/>
            <Route path="/login"  element={<Login setAuth = {setIsAuthenticated} />}/>
            <Route
                path="/get_into"
                element={isAuthenticated ? <GetIntoPage/> : <Navigate replace to="/login" />}
            />
            <Route path="/signUp"  element={<SignUp/>}/>
            <Route path="/tasks" element={<ContentPage contentComponent={TasksContent}/>} />
            <Route path="/team" element={<ContentPage contentComponent={TeamPageContent}/>} />
            <Route path="/coming" element={<ContentPage contentComponent={ComingSoonContent}/>} />
            <Route path="/settings" element={<ContentPage contentComponent={SettingsContent}/>} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;