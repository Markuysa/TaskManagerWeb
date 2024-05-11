import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import SignUp from './pages/signUp';
import MainPage from './pages/main_page';
import GetIntoPage from './pages/login';
import { Navigate } from "react-router-dom";
import TaskListPage from './pages/content/taskListPage';
import {createContext, useState} from "react";
import CommandsListPage from "./pages/content/commandsListPage";
export const AuthContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/"  element={<MainPage/>}/>
            <Route path="/login"  element={<Login/>}/>
            <Route
                path="/get_into"
                element={isAuthenticated ? <GetIntoPage/> : <Navigate replace to="/login" />}
            />
            <Route path="/signUp"  element={<SignUp/>}/>
            <Route path="/tasks" element={<TaskListPage />} />
            <Route path="/commands" element={<CommandsListPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;