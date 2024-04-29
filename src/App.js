import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LandingPage from './pages/mainLanding';
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<LandingPage/>}/>
        </Routes>       
      </BrowserRouter>  
    </div>
  );
}

export default App;