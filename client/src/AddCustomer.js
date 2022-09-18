import { useState } from "react";
import "./AddCustomer.css";

const AddCustomer = ({ saveData }) => {
  const [id_Member, setid_Member] = useState();
  const [Member_Name, setMember_Name] = useState();
  const [Member_Email, setMember_Email] = useState();
  const [Member_Number, setMember_Number] = useState();
  const [Member_Address, setMember_Address] = useState();
  const [Member_Type, setMember_Type] = useState();

 

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Member_Name) {
      alert("Please add a name");
      return;
    }
    if (!Member_Email.match(/.+@.+.com/)) {
      alert("Please add a valid email (Ex: abc@xyz.com )");
      return; 

    }
    if (!Member_Number) {
      alert("Please add a valid number");
      return;
    }
    if (!Member_Address) {
      alert("Please add Address");
      return;
    }
    if (!Member_Type) {
      alert("Please add a Member Type");
      return;
    }

    //gkgjmkgjg
    saveData({
      id_Member,
      Member_Name,
      Member_Email,
      Member_Number,
      Member_Address,
      Member_Type,
    });
    setid_Member("");
    setMember_Name("");
    setMember_Email("");
    setMember_Number("");
    setMember_Address("");
    setMember_Type("");
  };

  return (
    <form class="add-form" onSubmit={onSubmit}>
      <div class="form-control">
        <label class="AddCustomerLabel">ID</label>
        <input
        class="AddCustomerInput"
          type="text"
          placeholder="Add Customer ID"
          value={id_Member}
          onChange={(e) => setid_Member(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label class="AddCustomerLabel">Name</label>
        <input
        class="AddCustomerInput"
          type="text"
          placeholder="Add Customer Name"
          value={Member_Name}
          onChange={(e) => setMember_Name(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label class="AddCustomerLabel">E-mail</label>
        <input
        class="AddCustomerInput"
          type="text"
          placeholder="Add Customer Email"
          value={Member_Email}
          onChange={(e) => setMember_Email(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label class="AddCustomerLabel">Number</label>
        <input
        class="AddCustomerInput"
          type="text"
          placeholder="Add Customer Number"
          value={Member_Number}
          onChange={(e) => setMember_Number(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label class="AddCustomerLabel">Address</label>
        <input
          class="AddCustomerInput"
          type="text"
          placeholder="Add Customer Address"
          value={Member_Address}
          onChange={(e) => setMember_Address(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label class="AddCustomerLabel">Type</label>
        <input
          class="AddCustomerInput"
          type="text"
          placeholder="Add Customer Type"
          value={Member_Type}
          onChange={(e) => setMember_Type(e.target.value)}
        />
      </div>
      {/* <div className="form-control">
        <label>Gender</label>
        <input
          type="radiobutton"
          value={gender}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div> */}
      <input
        class="SaveButton"
        type="submit"
        value="Save Details"
       
      />
    </form>
  );
};

export default AddCustomer;
