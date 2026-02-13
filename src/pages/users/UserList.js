import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const UserList = () => {
      const [userList, setUserList] = useState([]);
      
  useEffect(() => {
    getUserList();
  }, []);
    const getUserList = async () => {
    
    const res = await axios.get(process.env.REACT_APP_API_URL + "/get-users-list" , 
        // { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    
    if (res.data.status === 200) {
      setUserList(res.data.data.userList);
    } else {
      setUserList([]);
      setTimeout(function () {
        $("#no-inquiry-message").html("No payments yet!");
      }, 100);
    }
  };
  return (
    <>
    
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>User List</h2>
      <Link to="/users/add" style={{ textDecoration: "none", color: "white" }}>
        <button style={{ padding: "10px 10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Add User
        </button>
      </Link>
    </div>
    <table border="1" width="100%">
  <thead>
    <tr>
      <th>Contact</th>
      <th>Email</th>
      <th>Address</th>
    </tr>
  </thead>

  <tbody>
    {userList.map((item, index) => (
      <tr key={index}>
        <td>
          <div><strong>{item.userName}</strong></div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            {item.mobileNumber}
          </div>
        </td>

        <td>{item.userEmail}</td>
        <td>{item.address}</td>
          <td><Link to={`/users/${item.emcyptedUserId}`}>Edit <svg viewBox="12" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z" fill="#000000"></path> </g></svg></Link></td>
        <td >Delete</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default UserList