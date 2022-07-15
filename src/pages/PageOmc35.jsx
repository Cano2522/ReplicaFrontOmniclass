import React, { Fragment,useState} from 'react'
import Omcn1 from '../components/omc35/omcn1'
import Omcn2 from '../components/omc35/omcn2'
import Omcn3 from '../components/omc35/omcn3'
import Omcn4 from '../components/omc35/omcn4'
import Omcn5 from '../components/omc35/omcn5'
import Omcn6 from '../components/omc35/omcn6';
import Footer from '../components/footer'
import ModalEdid from '../components/omc35/ModalEdid'
import {Toaster} from 'react-hot-toast'
import { useOmc35 } from '../context/omc35/ContextOmc35'
import Aside from '../components/omc35/aside'
import Modal2Add from '../components/omc35/Modal2Add'
import ButtonExel from '../components/buttonExel'
export default function PageOmc35() {


  const {UpdateOmc35Url,
    dataomcn2,
    dataomcn3,
    dataomcn4,
    dataomcn5,
    dataomcn6,
    omc35n1,
    omc35n2,
    omc35n3,
    omc35n4,
    omc35n5,
    omc35n6,
    selectOpp,
    selectOpp2,
    selectOpp3,
    selectOpp4,
    selectOpp5
  } =  useOmc35()

  const [numeroTabla,setnumeroTabla] = useState()
  const [dataFormAdd,setdataFormAdd] = useState([])
  const [select, setselect] = useState()
  const [current,setcurrent]=useState({
    Codigo:'',
    anioReg:'',
    definicionEng:'',
    definicionSpa:'',
    descriEng:'',
    descriSpa:'',
    regFinal:'',
   })


//Funcion para seleccionar fk
  const selectFk = (codigo)=>{
    const Codigo = dataFormAdd.filter(fk=> fk.Codigo === codigo)
    setselect(Codigo[0].Codigo)
  }

   

   const edidrow = (id,data)=>{
    setnumeroTabla(id)
    setcurrent({
      Codigo: data.Codigo, 
      anioReg:data.anioReg, 
      definicionEng:data.definicionEng,
      definicionSpa:data.definicionSpa,
      descriEng:data.descriEng,
      descriSpa:data.descriSpa,
      regFinal:data.regFinal,
    })
    setactiveedit(true)
  }

  //Estado Modales
  const [active,setactive]= useState(false)
  const [activeedit,setactiveedit] = useState(false)

  const createReciveTable = (idtable)=>{
    
       setnumeroTabla(idtable)
       setactive(true) 
       switch(idtable){
        case 2:{
          setdataFormAdd(omc35n1)
        }break;
        case 3:{
 
          setdataFormAdd(omc35n2)
        }break;
        case 4:{

          setdataFormAdd(omc35n3)
        }break;
        case 5:{

          setdataFormAdd(omc35n4)
        }break;
        case 6:{

          setdataFormAdd(omc35n5)
        }break;
      }
  }
  
   const updateRegistro = (data)=>{
    setcurrent(data)
    
    switch(numeroTabla){
      case 1:{
        const idRegistro = omc35n1.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc35Url(numeroTabla,idRegistro[0].idOmc35N1,data)
      }break;
      case 2:{
        console.log('es el updateRegistro', data)
        const idRegistro = omc35n2.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc35Url(numeroTabla,idRegistro[0].idOmc35N2,data,idRegistro[0].fk_Omc35N1)
      }break;
      case 3:{
        const idRegistro = omc35n3.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc35Url(numeroTabla,idRegistro[0].idOmc35N3,data,idRegistro[0].fk_Omc35N2)
      }break;
      case 4:{
        const idRegistro = omc35n4.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc35Url(numeroTabla,idRegistro[0].idOmc35N4,data,idRegistro[0].fk_Omc35N3)
      }break;
      case 5:{
        const idRegistro = omc35n5.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc35Url(numeroTabla,idRegistro[0].idOmc35N5,data,idRegistro[0].fk_Omc35N4)
      }break;
      case 6:{
        const idRegistro = omc35n6.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc35Url(numeroTabla,idRegistro[0].idOmc35N6,data,idRegistro[0].fk_Omc35N5)
      }break;
    }
    

  }




   return (
     <Fragment>
      
       <div className='container marginDivTable' style={{}}>
        <Toaster
          position='bottom-right'
          toastOptions={{
            duration:3000,
            style:{
              background:'#222',
              color:'white'
            }
          }}
        />
        
        <ButtonExel/>
        <div className='containerTitle'>
          <p className='textTitle'>Norma Omniclass 35: Materiales</p>
          <hr className='hrTitle'/>
        </div>

        <Omcn1 Omcn1={omc35n1} selectOpp={selectOpp} edidrow={edidrow}/>
        {dataomcn2.length>0 ?(<Omcn2 dataomcn2={dataomcn2} selectOpp2={selectOpp2} edidrow={edidrow}/>):(null)}       
        {dataomcn3.length>0  ?(<Omcn3 dataomcn3={dataomcn3} selectOpp3={selectOpp3} edidrow={edidrow}/>):(null)}  
        {dataomcn4.length>0  ?(<Omcn4 dataomcn4={dataomcn4} selectOpp4={selectOpp4} edidrow={edidrow}/>):(null)}
        {dataomcn5.length>0  ?(<Omcn5 dataomcn5={dataomcn5} selectOpp5={selectOpp5} edidrow={edidrow}/>):(null)}
        {dataomcn6.length>0 ?(<Omcn6 dataomcn6={dataomcn6}edidrow={edidrow}/>):(null)}
        <ModalEdid current={current} setactive={setactiveedit} active={activeedit}   numeroTabla={numeroTabla} updateRegistro={updateRegistro}/>
        
        </div>
        <Footer/>
        <Aside createReciveTable={createReciveTable}/>
        <Modal2Add 
        active={active} 
        numeroTabla={numeroTabla} 
        selectFk={selectFk} 
        dataAdd={dataFormAdd} 
        setactive={setactive} 
        select={select}
        setselect={setselect}
        >
        </Modal2Add>
     </Fragment >
   )
 }