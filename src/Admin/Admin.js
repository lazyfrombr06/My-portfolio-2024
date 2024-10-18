import React, { useState, useEffect } from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
const Admin = () => {
  const [showformData, setShowFromData] = useState(false);

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = async () => {
    let result = await fetch("http://brajesh.tech/get-form-data");
    result = await result.json();
    setFormData(result);
  };

const searchHadle = async(event)=>{
  let key=event.target.value;

  if(key){
    let result = await fetch(`http://brajesh.tech/search/${key}`);
    result = await result.json();
    if(result){
      setFormData(result)
    }else{
      getFormData()
    }
  }


}

  return (
    <div className="admin-page-component">
   
<div className="search-box-admin">
  

</div>
      <div className="admin-page-first-container">
        <div className="form-data-container">
          <h2 className="form-data-heading">Contact Form Data</h2>
          {showformData ? (
            <div className="from-data-inner-container">
              {/* <h2 className="form-list-heading">Form list</h2> */}

              
              {formData.map((item, index) => (
                <ul className="inner-form-container-get-ul">
                  <li>
                    <span className="from-data-get-li-span-1">Sl. No :</span>
                    <span className="form-data-get-li-span-2">{index + 1}</span>
                  </li>
                  <li>
                    <span className="from-data-get-li-span-1">Name : </span>
                    <span className="form-data-get-li-span-2">
                      {item.formName}
                    </span>
                  </li>
                  <li>
                    <span className="from-data-get-li-span-1">Email : </span>
                    <span className="form-data-get-li-span-2">
                      {item.formEmail}
                    </span>
                  </li>
                  <li>
                    <span className="from-data-get-li-span-1">
                      Contact No. :{" "}
                    </span>
                    <span className="form-data-get-li-span-2">
                      {item.formPhone}
                    </span>
                  </li>
                  <li>
                    <span className="from-data-get-li-span-1">Message : </span>
                    <span className="form-data-get-li-span-2">
                      {item.formMsg}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          ) : null}

          <button
            className="form-data-expend btn"
            onClick={() => setShowFromData(!showformData)}
          >
           Click here
          </button>
        </div>
      </div>
      <Link to='/' className='link-to-go-to-home-login-page'>Go to Home</Link>
    </div>
  );
};

export default Admin;
