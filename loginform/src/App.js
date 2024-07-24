import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import {Col,Container,Form,Row ,Table} from 'react-bootstrap';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from 'react-toastify';

function App() {
  let[formData,setFormData ]=useState({
    uname:'',
    uemail:'',
    uphone:'',
    umessage:'',
    index:''
    
  })

let[userData,setUserData]=useState([]);
//.......................................

let handleSubmit=(event)=>{
  let currentUserFormData={uname:formData.uname,
    uemail:formData.uemail,
    uphone:formData.uphone,
    umessage:formData.umessage};
    let checkFilterUserData=userData.filter((v)=>v.uemail==formData.uemail||v.uphone==formData.uphone);
    if(checkFilterUserData.length==1){
    toast.error("phone number or email already exist....");
    }
    else{
      let oldUserData=[...userData,currentUserFormData];
  setUserData(oldUserData);
  setFormData({
    uname:'',
    uemail:'',
    uphone:'',
    umessage:'',
    index:''
    
  })
  console.log(oldUserData);
    }
  event.preventDefault()
}
//........................................
  let getValue=(event)=>{
  let oldData={...formData}
 // console.log(oldData)
  let inputName=event.target.name;
  let inputValue=event.target.value;
  oldData[inputName]=inputValue;
  //console.log(oldData);
  setFormData(oldData)
  }
  
  let deleteRow=(deleteIndex)=>{
    let filterDataAfterDelete=userData.filter((v,index)=>index!==deleteIndex);
     toast.success("data deleted successfully");
    setUserData(filterDataAfterDelete)
  }

  let editRow=(indexNumber)=>{
    let editData=userData.filter((v,i)=>i==indexNumber)[0];
    editData['index']=indexNumber
    setFormData(editData)
  }
  return (
    <div className="App">
       <Container fluid>
       <ToastContainer/>
        <Container>
          <Row>
            <Col className='text-center py-5'>
            <h1>Enquiry Now</h1>
            </Col>
          </Row>
          <Row>
          <Col lg={5}>
          {userData.length}
            <form onSubmit={handleSubmit}> 
              <div className='pb-3'>
              <label className='form-label'>Name</label>
              <input type='text' onChange={getValue} name='uname' value={formData.uname} className='form-control'/>
              </div>
              <div className='pb-3'>
              <label className='form-label'>Email</label>
              <input type='email' name='uemail' onChange={getValue} value={formData.uemail} className='form-control'/>
              </div>
              <div className='pb-3'>
              <label className='form-label'>phone</label>
              <input type='text' name='uphone' onChange={getValue} value={formData.uphone} className='form-control'/>
              </div>

              <div className='pb-3'>
              <label for='' className='form-label'>Message</label>
              <textarea  className='form-control'  onChange={getValue} value={formData.umessage} name='umessage' id='' rows='3'/>
              </div>


              <button className='btn btn-primary'>
                {(formData.index!=='') ?'update':'save'}
              </button>
            </form>
            </Col>
            <Col lg={7}>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {(userData.length>=1) ?
          userData.map((obj,index)=>{
            return(
        <tr key={index}>
        <td>{index+1}</td>
        <td>{obj.uname}</td>
        <td>{obj.uemail}</td>
        <td>{obj.uphone}</td>
        <td>{obj.umessage}</td>
        <td>
          <button onClick={()=>deleteRow(index)}>Delete</button>
          <button onClick={()=>editRow(index)}>Edit</button>
        </td>
        </tr>)

          })
                 :
         <tr>
         <td coldSpan={7}>No Data found</td>
         </tr>}         
      </tbody>
    </Table>

            </Col>
          </Row>
        </Container>
       </Container>
    </div>
  );
}

export default App;
