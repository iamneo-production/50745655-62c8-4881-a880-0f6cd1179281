import React from 'react';
import './order.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Order1() {
  // Function to send policy data to the backend
  const addPolicyToDatabase = (x) => {
    // const reg = {"policy_name":policyName , "policy_number":policyNumber , "type":type , "duration":duration};
    // console.log(reg);
    axios.post('http://localhost:8080/policies', x)
      .then((response) => {
        console.log(response.data); // Assuming the backend returns a success message
        toast.success("Policy Added to Your Account Successfully");
      })
      .catch((error) => {
        console.error('Error adding policy:', error);
        toast.error("error");
      });
  };

  const handleAddPolicy = (policyadding) => {
    addPolicyToDatabase(policyadding);
    // toast.success("Policy Added to Your Account Successfully");
  };
  return (
    <>

      <div className="orders-container">
        <h1>New Policies</h1>
        <div className="orders-list">
          <div className="order-item">
            <h3>Policy Code: 14</h3>
            <p>Policy Name:Endowment with Profits </p>
            <ul>
              <li>Duration : 36 Months</li>
               <li> Type : Endowment</li> 
            </ul>
           <a><button className="btn-prepare"onClick={() => handleAddPolicy({
            policyName: 'JEEVAN AMRIT',
            policyNumber: '41',
            type: 'Endowment',
            duration: '24 months',
             })}>Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code: 41</h3>
            <p>Policy Name : Jeevan Amrit</p>
            <ul>
              <li>Duration :24 Months</li>
              <li> Type : Endowment</li> 
            </ul>
            <a><button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'JEEVAN ANKUR',
              policyNumber: '48',
              type: 'Endowment',
              duration: '48 months',
             })}>Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 48</h3>
            <p>Policy Name :	Jeevan Ankur</p>
            <ul>
              <li>Duration : 10 Yrs</li>
              <li> Type : Endowment</li> 
            </ul>
            <a><button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'NEW JANARAKSHA',
              policyNumber: '81',
              type: 'Endowment',
              duration: '5Yrs',
             })}>Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 81</h3>
            <p> Policy Name : New Janaraksha</p>
            <ul>
              <li>Duration : 5 Yrs</li>
              <li>Type : Endowment</li> 
            </ul>
            <a><button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'JEEVAN SHREE-1',
              policyNumber: '91',
              type: 'Endowment',
              duration: '7 Yrs',
             })}>Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 91</h3>
            <p>Policy Name :Jeevan Shree-1 </p>
            <ul>
              <li>Duration : 7 Yrs</li>
              <li>Type : Endowment</li>
            </ul>
            <a><button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'JEEVAN PRAMUKH',
              policyNumber: '103',
              type: 'Endowment',
              duration: '36 months',
             })}>Add</button></a>
          </div>
          <div className="order-item">
            <h3>Policy Code : 103</h3>
            <p>Policy Name :Jeevan Pramukh</p>
            <ul>
              <li>Duration : 36 Months</li>
              <li> Type : Endowment</li> 
            </ul>
            <a><button className="btn-prepare"onClick={() => handleAddPolicy({
              policyName: 'JEEVAN AMRIT',
              policyNumber: '41',
              type: 'Endowment',
              duration: '24 months',
             })}>Add</button></a>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
          </div>
         
        </div>
      </div>
    
  
    </>
  );
}

export default Order1;
