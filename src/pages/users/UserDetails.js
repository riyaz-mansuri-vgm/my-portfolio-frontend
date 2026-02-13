import axios from "axios";
import './../../assets/index.css';

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";


function UserDetails({ user, onSubmit }) {
  const  userId  = useParams();
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
    const  navigate  = useNavigate();
  var UserId = userId.id;
  useEffect(() => {
    if(UserId !== "add"){
      getUserDetail({UserId});
    }
  }, [UserId]);

  console.log(UserId, "")
  const [formData, setFormData] = useState({
    userName: user?.userName || "",
    userEmail: user?.userEmail || "",
    mobileNumber: user?.mobileNumber || "",
    address: user?.address || ""
  });
  const getUserDetail = async (id) => {
      const res = await axios.post(process.env.REACT_APP_API_URL + "/view-user-detail" ,{EncryptedUserId: id.UserId},
          // { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      if (res.data.status === 200) {
        setFormData({
          userName: res.data.data.userName,
          userEmail: res.data.data.email,
          mobileNumber: res.data.data.mobileNumber,
          address: res.data.data.address,
          userId: res.data.data.userId,
        });
      } else {
        // setUserList([]);
        setTimeout(function () {
          // $("#no-inquiry-message").html("Something went wrong!");
        }, 100);
      }
    };
    const addUserDetails = async (data) => {
      const request ={
        userName: formData.userName,
        Email:  formData.userEmail,
        mobileNumber: formData.mobileNumber,
        address: formData.address,
      }
      const res = await axios.post(process.env.REACT_APP_API_URL + "/add-user-details" , request,
          // { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      
      if (res.data.status === 200) {
        // setUserList(res.data.data.userList);
          toast.success("User details added successfully");
      navigate(`/users/${res.data.data.encryptedUserId}`);
      getUserDetail({UserId: res.data.data.encryptedUserId});
      } else {
        // setUserList([]);
        setTimeout(function () {
          // $("#no-inquiry-message").html("Something went wrong!");
        }, 100);
      }
    };
   const updateUser = async (data) => {
      const userDetail ={
        userName: data.userName ? data.userName : formData.userName,
        Email: data.userEmail ? data.userEmail : formData.userEmail,
        mobileNumber: data.mobileNumber ? data.mobileNumber : formData.mobileNumber,
        address: data.address ? data.address : formData.address,
        EncryptedUserId: UserId
      }
      const res = await axios.post(process.env.REACT_APP_API_URL + "/update-user-detail" , userDetail,
          // { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      debugger
      if (res.data.status === 200) {
             toast.success("User details updated successfully");
        // setUserList(res.data.data.userList);
      } else {
        // setUserList([]);
        setTimeout(function () {
          // $("#no-inquiry-message").html("Something went wrong!");
        }, 100);
      }
    };
    var userValidation=()=>{
      debugger
      let userNameError="";
      let emailError="";
      let mobileNumberError="";
      let addressError="";

      let isValid = true;
      if(!formData.userName){
       userNameError = "User name is required";
        isValid = false;
      }
      if(!formData.userEmail){

        emailError = "Email is required";
        isValid = false;
      }
      if(!formData.mobileNumber){

        mobileNumberError = "Mobile number is required";
        isValid = false;
      }
      if(!formData.address){

        addressError = "Address is required";
        isValid = false;
      }
setUserNameError(userNameError);
setEmailError(emailError);
setMobileNumberError(mobileNumberError);
setAddressError(addressError);
      // if(isValid){
      //   return false
      // }
          return isValid;
    }

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const isValid = userValidation();
    if(isValid){
    e.preventDefault();
    if(userId.id === "add"){
      addUserDetails(formData);
    } else {
    updateUser(formData);
    }
  }
  };

  return (
    <>

 <div className="product-wrapper text-center ">
      <h1 className="product-title">Users</h1>

      <div className="product-grid">

          <div className="product-card">
              <div className=" isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-12">
  <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
    <div
    //  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
     ></div>
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact sales</h2>
    <p className="mt-2 text-lg/8 text-gray-400">Fill in the form below to get in touch with us</p>
  </div>
  <form  className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-3 gap-x-8 gap-y-6 md:grid-cols-5">
      <div>
        <label for="first-name" className="block text-sm/6 font-semibold text-white">User name</label>
        <div className="mt-2.5">
          <input id="userName" type="text" onChange={handleChange} value={formData.userName} name="userName" autocomplete="given-name" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />

       <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{userNameError}</div>
        </div>
      </div>

      <div className="md:col-span-12">
        <label for="email" className="block text-sm/6 font-semibold text-white">Email</label>
        <div className="mt-2.5">
          <input id="email" type="text" name="userEmail" value={formData.userEmail} onChange={handleChange} autocomplete="email" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" />
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{emailError}</div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="phone-number" className="block text-sm/6 font-semibold text-white">Phone number</label>
        <div className="mt-2.5">
          <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              
            </div>
            <input id="phone-number" value={formData.mobileNumber} onChange={handleChange} type="text" name="mobileNumber" placeholder="1234567890" className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
          </div>
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{mobileNumberError}</div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="message" className="block text-sm/6 font-semibold text-white">Address</label>
        <div className="mt-2.5">
          <textarea id="message" name="address" value={formData.address} onChange={handleChange} rows="4" className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"></textarea>
          <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{addressError}</div>
        </div>
      </div>
      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
          <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
            <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
            <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" className="absolute inset-0 size-full appearance-none focus:outline-hidden" />
          </div>
        </div>
        <label for="agree-to-policies" className="text-sm/6 text-gray-400">
          By selecting this, you agree to our
          <a href="#" className="font-semibold whitespace-nowrap text-indigo-400">privacy policy</a>.
        </label>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" onClick={handleSubmit} className="view-btn block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{formData.userId ? "Update" : "Add User"}</button>
    </div>
  </form>
</div>
          </div>
      </div>
    </div>

</>
  );
}

export default UserDetails;
