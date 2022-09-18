import React, { useState, useEffect } from "react";
import axios from 'axios';
import AddCustomer from "./AddCustomer";
import "./App.css";


function MyForm() {
  // const [name, setName] = useState("");
  // const [Password, setPassword] = useState("");

  

  // search
  
//

  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('http://localhost:5555/api', {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log('data is: ', JSON.stringify(data));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  //


  // const onAdd = async (customer) => {
  //   const res = await fetch("http://localhost:3000/customers", {
  //     method: "POST",
  //     headers: { "content-Type": "application/json" },
  //     body: JSON.stringify(customer),
  //   });
  //   const data = res.json();
  //   setCustomers([...customers, data]);
  // };

  const saveData = async (saveData) => {
    console.log("savinag data");
    const response = await fetch("http://localhost:5555/api/save-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveData),
    });
    console.log(response);
    console.log(response.data);
  };
  useEffect(() => {
    saveData();
  }, []);

  return (


    
    <div class="login-form">


      <div class="header">
        <div class="logo"> Member </div>

        <div id="navhead">
          <a class="navheadlink" href="#">
            HOME
          </a>
          <a class="navheadlink" href="#">
            ABOUT
          </a>
          <a class="navheadlink" href="#">
            CONTACT US
          </a>
        </div>
        <div>
          <button class="headButton">SIGN UP</button>
        </div>
      </div>
//

      <div class="flex-row">
        <AddCustomer saveData={saveData}/>

       
        
     



     

      <div className="App">

      <tr class="tableHead">
   <th>Name</th>
   <th>E-mail</th>
   <th>Number</th>
   <th>Address</th>
   <th>Type</th>
 </tr>
      
      <table >
        
      < div class="table">
      
 
{data.data.map(person => {
   
  return (
   
      
    <tr key={person.id_Member}>
      <td>{person.Member_Name}</td>
      <td>{person.Member_Email}</td>
      <td>{person.Member_Number}</td>
      <td>{person.Member_Address}</td>
      <td>{person.Member_Type}</td>
      <br />
    </tr>
    
    
  );
})}
</div>
</table>

</div>
<div class="button-con">
<button class='fetch-btn' onClick={ handleClick}>Fetch data</button>
</div>
      </div>


      {/* <div class="containerstyle">
        <div class="leftText">
          <div class="leftText1">NOT A MEMBER YET?</div>
          <div class="leftText2">Create an account here</div>
        </div>
        <div class="containers2">
          <form class="formstyle">
            <div class="loginHead">MEMBER LOGIN</div>

            <label class="label">USER NAME </label>
            <input
              class="labelInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label class="label">PASSWORD </label>
            <input
              class="labelInput"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button class="submitButton">submit</button>
            <div class="text-SU">IF you are not an user </div>
            <div class="text-SU">
              <a href="#">click here</a> to sign up
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}


export default MyForm;
