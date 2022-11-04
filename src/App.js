import { Route,Routes, } from "react-router-dom";
import { User_Register } from "./Components/User_Register/User_Register";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Home } from "./Components/Home/Home";
import { Tovar } from "./Components/Container/Tovar/Tovar";
import { Register } from "./Components/Error/Error";
import { Korzina } from "./Components/Container/Container_Korzina/Korzina"; 
import './scss/Style.scss'


function App() {
  return (
    <div className="App">
     <Header />
     <Sidebar />
     <Footer />
     <Home />
       <Routes > 
       <Route path="/Home" element={ <Home />} />
       <Route path="/items" element={<Korzina />} />
       <Route path="/Store" element={<Tovar />} />
       <Route path="/Login_on" element={<Register />} />
       <Route path="/login" element={<User_Register />} />
     </Routes> 
    </div>
    
  );
}

export default App;
