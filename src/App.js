import React from "react"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Logout from "./pages/logout";
import Createaccount from "./pages/Createaccount"
import Deposit from "./pages/Deposit"
import Withdraw from "./pages/Withdraw"
import Alldata from "./pages/Alldata"
import { UserContext } from "./context.js";


function App() {
    return (
        <>
          <BrowserRouter>
            <UserContext.Provider
            value={{
              users: [
                {
                  name: "",
                  email: "",
                  password: "",
                  balance: null,
                },
              ],
              log: false,
              login: false,
            }}
            >      
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/createaccount" element={<Createaccount />} />
              <Route path="/withdraw" element={<Withdraw />} /> 
              <Route path="/alldata" element={<Alldata />} />  
              <Route path="/logout/" element={<Logout />} />         
            </Routes>
          </div>
          </UserContext.Provider>
          </BrowserRouter>
        </>
        
      )
}
export default App