import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/login';
import SignUp from './pages/signUp';
import MainPage from './pages/main_page';
import GetIntoPage from './pages/login';
import { Navigate } from "react-router-dom";
import TaskListPage from './pages/mainTasksPage';
function App() {

  const isAuthenticated = false;
  return (
    <div>
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
        </Routes>       
      </BrowserRouter>  
    </div>
  );
}

export default App;