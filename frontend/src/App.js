import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './Homepage';
import AdminNav from './components/common/adminNav/adminNav';
import FoodList from './components/FoodManagement/FoodList';
import AddFood from './components/FoodManagement/AddFood';



function App() {
  return (
    <div className="App">
   <BrowserRouter>
          <Routes>
            <Route path="/Home" exact element={<Homepage/>} />
            </Routes>
            <Routes>
            <Route path="/addFood" exact element={<AddFood/>} />
            </Routes>
            <Routes>
            <Route path="/foods" exact element={<FoodList/>} />
            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
