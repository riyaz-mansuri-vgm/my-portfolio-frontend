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
    // <div>UserList</div>
    <>
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
          <td><Link to={`/users/${item.emcyptedUserId}`}>Edit</Link></td>
        <td >Delete</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}

export default UserList