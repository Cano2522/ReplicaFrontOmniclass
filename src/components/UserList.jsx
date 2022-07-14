import React, { Fragment,useEffect,useState } from 'react'
import { fetchAllUsers,fetchAllOMCN2,fetchAllOMCN3,fetchAllOMCN4,fetchAllOMCN5,fetchAllOMCN6 } from '../redux/slices/users'
import { useDispatch, useSelector,} from 'react-redux';


function UserList() {

    
    //USAMOS FUNCION useSelector PARA OBTENER DATOS DEL STORE DE REDUX
    const {omcn1,omcn2,omcn3,omcn4,omcn5,omcn6} = useSelector(state => state.users)
    // const {} = useSelector(state => state.users)
    // const {} = useSelector(state=> state.users)
    //FUNCION UseDispatch EMPLEAMOS PARA ENVIAR ACCIONES A LA STORE DE REDUX
    const dispatch = useDispatch()
    //FUNCION useEffect SE ACTIVA CADA QUE HACEMOS UN LLAMADO A LA API  
    useEffect(()=>{
        dispatch(fetchAllUsers())
        dispatch(fetchAllOMCN2())
        dispatch(fetchAllOMCN3())
        dispatch(fetchAllOMCN4())
        dispatch(fetchAllOMCN5())
        dispatch(fetchAllOMCN6())
        
    },[dispatch])
     


    //  ESTADOS DE CAMBIOS PARA FILTRAR LOS DATOS
    const [dataomcn2,setdataomcn2] = useState([])
    const [dataomcn3,setdataomcn3] = useState([])
    const [dataomcn4,setdataomcn4] = useState([])
    const [dataomcn5,setdataomcn5] = useState([])
    const [dataomcn6,setdataomcn6] = useState([])

    //FUNCIONES PARA FILTRAR
    const selectOpp = (data)=> {
      setdataomcn2(omcn2.filter((dato)=>dato.fk_Omc23N1 === data))
      setdataomcn3([])
      setdataomcn4([])
      setdataomcn5([])
      setdataomcn6([])
      
      
    }

    const selectOpp2 = (data)=> {
      setdataomcn3(omcn3.filter((dato)=>dato.fk_Omc23N2 === data))
      setdataomcn4([])
      setdataomcn5([])
      setdataomcn6([])
    }
    
    const selectOpp3 = (data)=> {
      setdataomcn4(omcn4.filter((dato)=>dato.fk_Omc23N3 === data))
      setdataomcn5([])
      setdataomcn6([])
      
    }
    
    const selectOpp4 = (data)=> {
      setdataomcn5(omcn5.filter((dato)=>dato.fk_Omc23N4 === data))
      setdataomcn6([])
      
    }

    const selectOpp5 = (data)=> {
      setdataomcn6(omcn6.filter((dato)=>dato.fk_Omc23N5 === data))
      
    }



  return (

    
    <div className='container mt-4'>

        <table style={{textAlign:'center'}} className='table table-striped table-hover mt-5 shadow-lg'>
            <thead >
                <tr className='text-white' style={{fontSize:'15px',backgroundColor:'rgb(224, 145, 255)'}} >
                    <th>No</th>
                    <th>Codigo</th>
                    <th>Descripcion en ENG</th>
                    <th>Descripcion en ESP</th>
                    <th>Definicion en ENG</th>
                    <th>Definicion en ESP</th>
                    <th>Ejemplo en ENG</th>
                    <th>Ejemplo en ESPA</th>
                    <th>Año de Registro</th>
                    <th>Registro Final</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                  omcn1.length > 0 ? (
                    omcn1.map((lista,index)=>(
                        <tr key={lista.idOmc23N1} id={lista.idOmc23N1} className="row-omcN1" onClick={()=>selectOpp(lista.idOmc23N1)} style={{fontSize:'14px',textAlign:'left'}} >
                            <td >{lista.idOmc23N1}</td>
                            <td>{lista.Codigo}</td>
                            <td>{lista.descriEng}</td>
                            <td>{lista.descriSpa}</td>
                            <td>{lista.definicionEng}</td>
                            <td>{lista.definicionSpa}</td>
                            <td>{lista.ejemploEng}</td>
                            <td>{lista.ejemploSpa}</td>
                            <td>{lista.aregistro}</td>
                            <td>{lista.regFinal}</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>


                        </tr>
                    ))
                  ):(<tr>
                    <td colSpan="10"></td>
                  </tr>)
                }
            </tbody>
        </table>

        { dataomcn2.length>0?(<table  className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr style={{fontSize:'15px',backgroundColor:'rgb(224, 145, 255)'}} className='text-white' >
                    <th>No</th>
                    <th>Codigo</th>
                    <th>Descripcion en ENG</th>
                    <th>Descripcion en ESP</th>
                    <th>Definicion en ENG</th>
                    <th>Definicion en ESP</th>
                    <th>Ejemplo en ENG</th>
                    <th>Ejemplo en ESPA</th>
                    <th>Año de Registro</th>
                    <th>Registro Final</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                  dataomcn2.length > 0 ? (
                    dataomcn2.map((lista,index)=>(
                        <tr key={lista.idOmc23N2} id={lista.idOmc23N2} className="row-omcN1" onClick={()=>selectOpp2(lista.idOmc23N2)} style={{fontSize:'14px'}} >
                            <td >{lista.idOmc23N2}</td>
                            <td>{lista.Codigo}</td>
                            <td>{lista.descriEng}</td>
                            <td>{lista.descriSpa}</td>
                            <td>{lista.definicionEng}</td>
                            <td>{lista.definicionSpa}</td>
                            <td>{lista.ejemploEng}</td>
                            <td>{lista.ejemploSpa}</td>
                            <td>{lista.aregistro}</td>
                            <td>{lista.fk_Omc23N1}</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>


                        </tr>
                    ))
                  ):(<tr>
                    <td colSpan="10"></td>
                  </tr>)
                }
            </tbody>
        </table>):(null)}

        { dataomcn3.length>0?(<table  className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr style={{fontSize:'15px',backgroundColor:'rgb(224, 145, 255)'}} className='text-white' >
                    <th>No</th>
                    <th>Codigo</th>
                    <th>Descripcion en ENG</th>
                    <th>Descripcion en ESP</th>
                    <th>Definicion en ENG</th>
                    <th>Definicion en ESP</th>
                    <th>Ejemplo en ENG</th>
                    <th>Ejemplo en ESPA</th>
                    <th>Año de Registro</th>
                    <th>Registro Final</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                  dataomcn3.length > 0 ? (
                    dataomcn3.map((lista,index)=>(
                        <tr key={lista.idOmc23N3} id={lista.idOmc23N3} className="row-omcN1" onClick={()=>selectOpp3(lista.idOmc23N3)} style={{fontSize:'14px'}} >
                            <td >{lista.idOmc23N3}</td>
                            <td>{lista.Codigo}</td>
                            <td>{lista.descriEng}</td>
                            <td>{lista.descriSpa}</td>
                            <td>{lista.definicionEng}</td>
                            <td>{lista.definicionSpa}</td>
                            <td>{lista.ejemploEng}</td>
                            <td>{lista.ejemploSpa}</td>
                            <td>{lista.aregistro}</td>
                            <td>{lista.fk_Omc23N2}</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>


                        </tr>
                    ))
                  ):(<tr>
                    <td colSpan="10"></td>
                  </tr>)
                }
            </tbody>
        </table>):(null)}

        { dataomcn4.length>0?(<table  className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr style={{fontSize:'15px',backgroundColor:'rgb(224, 145, 255)'}} className='text-white' >
                    <th>No</th>
                    <th>Codigo</th>
                    <th>Descripcion en ENG</th>
                    <th>Descripcion en ESP</th>
                    <th>Definicion en ENG</th>
                    <th>Definicion en ESP</th>
                    <th>Ejemplo en ENG</th>
                    <th>Ejemplo en ESPA</th>
                    <th>Año de Registro</th>
                    <th>Registro Final</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                  dataomcn4.length > 0 ? (
                    dataomcn4.map((lista,index)=>(
                        <tr key={lista.idOmc23N4} id={lista.idOmc23N4} className="row-omcN1" onClick={()=>selectOpp4(lista.idOmc23N4)} style={{fontSize:'14px'}} >
                            <td >{lista.idOmc23N4}</td>
                            <td>{lista.Codigo}</td>
                            <td>{lista.descriEng}</td>
                            <td>{lista.descriSpa}</td>
                            <td>{lista.definicionEng}</td>
                            <td>{lista.definicionSpa}</td>
                            <td>{lista.ejemploEng}</td>
                            <td>{lista.ejemploSpa}</td>
                            <td>{lista.aregistro}</td>
                            <td>{lista.fk_Omc23N3}</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>


                        </tr>
                    ))
                  ):(<tr>
                    <td colSpan="10"></td>
                  </tr>)
                }
            </tbody>
        </table>):(null)}
        

        { dataomcn5.length>0?(<table  className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr style={{fontSize:'15px',backgroundColor:'rgb(224, 145, 255)'}} className='text-white' >
                    <th>No</th>
                    <th>Codigo</th>
                    <th>Descripcion en ENG</th>
                    <th>Descripcion en ESP</th>
                    <th>Definicion en ENG</th>
                    <th>Definicion en ESP</th>
                    <th>Ejemplo en ENG</th>
                    <th>Ejemplo en ESPA</th>
                    <th>Año de Registro</th>
                    <th>Registro Final</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                  dataomcn5.length > 0 ? (
                    dataomcn5.map((lista,index)=>(
                        <tr key={lista.idOmc23N5} id={lista.idOmc23N5} className="row-omcN1" onClick={()=>selectOpp5(lista.idOmc23N5)} style={{fontSize:'14px'}} >
                            <td >{lista.idOmc23N5}</td>
                            <td>{lista.Codigo}</td>
                            <td>{lista.descriEng}</td>
                            <td>{lista.descriSpa}</td>
                            <td>{lista.definicionEng}</td>
                            <td>{lista.definicionSpa}</td>
                            <td>{lista.ejemploEng}</td>
                            <td>{lista.ejemploSpa}</td>
                            <td>{lista.aregistro}</td>
                            <td>{lista.fk_Omc23N3}</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>


                        </tr>
                    ))
                  ):(<tr>
                    <td colSpan="10"></td>
                  </tr>)
                }
            </tbody>
        </table>):(null)}
        

        { dataomcn6.length>0?(<table  className='table table-striped table-hover mt-5 shadow-lg'>
        <h1>omc23 nivel 6</h1>
            <thead>
                <tr style={{fontSize:'15px',backgroundColor:'rgb(224, 145, 255)'}} className='text-white' >
                    <th>No</th>
                    <th>Codigo</th>
                    <th>Descripcion en ENG</th>
                    <th>Descripcion en ESP</th>
                    <th>Definicion en ENG</th>
                    <th>Definicion en ESP</th>
                    <th>Ejemplo en ENG</th>
                    <th>Ejemplo en ESPA</th>
                    <th>Año de Registro</th>
                    <th>Registro Final</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                  dataomcn6.length > 0 ? (
                    dataomcn6.map((lista,index)=>(
                        <tr key={lista.idOmc23N6} id={lista.idOmc23N6} className="row-omcN1" style={{fontSize:'14px'}} >
                            <td >{lista.idOmc23N6}</td>
                            <td>{lista.Codigo}</td>
                            <td>{lista.descriEng}</td>
                            <td>{lista.descriSpa}</td>
                            <td>{lista.definicionEng}</td>
                            <td>{lista.definicionSpa}</td>
                            <td>{lista.ejemploEng}</td>
                            <td>{lista.ejemploSpa}</td>
                            <td>{lista.aregistro}</td>
                            <td>{lista.fk_Omc23N5}</td>
                            <td><i className="fa-solid fa-pen-to-square"></i></td>


                        </tr>
                    ))
                  ):(<tr>
                    <td colSpan="10"></td>
                  </tr>)
                }
            </tbody>
        </table>):(null)}
    </div>
  )
}

export default UserList