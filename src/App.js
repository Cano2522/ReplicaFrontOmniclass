import React,{useState} from "react";
import Login from "./pages/Login";
//redux
import { Omc23Provider } from "./context/omc23/ContextOmc23";
import { Omc34Provider } from "./context/omc34/ContextOmc34";
import { Omc41Provider } from "./context/omc41/ContextOmc41";
import { Provider } from "react-redux";
import store from './redux'
import './styles/omc23/styles.css'
import './styles/modalsStyle.css'
import './styles/buttons.css'
import './styles/styles.css'
import { Rutas } from "./Routes/Rutas";
import { TableProvider } from "./context/Materiales/TableContext";
import { Container } from "./components/Materiales/Container";
import { LoginProvider } from "./context/LoginContext";
import { useLogin } from "./context/LoginContext";
function App() {
  
  const {dataToken,authentication}= useLogin()


  if(authentication===false){
      return(

          <Login/>
        
      )
  }

  if(authentication===true){
    return (
      <div className="" >
        
        <Provider store={store}>
          <Omc23Provider>
            <TableProvider>
              <Omc34Provider>
                <Omc41Provider>
                <Omc41Provider>
                  <Omc34Provider>
                    <Rutas />
                  </Omc34Provider>
                </Omc41Provider>
                </Omc41Provider>
              </Omc34Provider>
            </TableProvider>
          </Omc23Provider>
        </Provider>
      </div>
    )
  }

  }

export default App;
