import React, { Fragment,useState} from 'react'
import Omcn1 from '../components/omc34/omcn1'
import Omcn2 from '../components/omc34/omcn2'
import Omcn3 from '../components/omc34/omcn3'
import Omcn4 from '../components/omc34/omcn4';
import Footer from '../components/footer'
import ModalEdid from '../components/omc34/ModalEdid'
import {Toaster} from 'react-hot-toast'
import { useOmc34 } from '../context/omc34/ContextOmc34'
import Aside from '../components/omc34/aside'
import Modal2Add from '../components/omc34/Modal2Add'
import ButtonExel from '../components/buttonExel'
export default function PageOmc34() {


  const {UpdateOmc34Url,
    dataomcn2,
    dataomcn3,
    dataomcn4,
    omc34n1,
    omc34n2,
    omc34n3,
    omc34n4,
    selectOpp,
    selectOpp2,
    selectOpp3
  } =  useOmc34()

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
          setdataFormAdd(omc34n1)
        }break;
        case 3:{
 
          setdataFormAdd(omc34n2)
        }break;
        case 4:{

          setdataFormAdd(omc34n3)
        }break;
      }
  }
  
   const updateRegistro = (data)=>{
    setcurrent(data)
    
    switch(numeroTabla){
      case 1:{
        const idRegistro = omc34n1.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc34Url(numeroTabla,idRegistro[0].idOmc34N1,data)
      }break;
      case 2:{
        console.log('es el updateRegistro', data)
        const idRegistro = omc34n2.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc34Url(numeroTabla,idRegistro[0].idOmc34N2,data,idRegistro[0].fk_Omc34N1)
      }break;
      case 3:{
        const idRegistro = omc34n3.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc34Url(numeroTabla,idRegistro[0].idOmc34N3,data,idRegistro[0].fk_Omc34N2)
      }break;
      case 4:{
        const idRegistro = omc34n4.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc34Url(numeroTabla,idRegistro[0].idOmc34N4,data,idRegistro[0].fk_Omc34N3)
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
          <p className='textTitle'>Norma Omniclass 34: Roles Organizacionales</p>
          <hr className='hrTitle'/>
        </div>

        <Omcn1 Omcn1={omc34n1} selectOpp={selectOpp} edidrow={edidrow}/>
        {dataomcn2.length>0 ?(<Omcn2 dataomcn2={dataomcn2} selectOpp2={selectOpp2} edidrow={edidrow}/>):(null)}       
        {dataomcn3.length>0 ?(<Omcn3 dataomcn3={dataomcn3} selectOpp3={selectOpp3} edidrow={edidrow}/>):(null)}  
        {dataomcn4.length>0 ?(<Omcn4 dataomcn4={dataomcn4}edidrow={edidrow}/>):(null)}
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