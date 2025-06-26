import { useState } from "react"; "react";

export default function State() {

  let username = "Nguyen";
  const [isLogin, setLogin] = useState(false);

  const handleLogin = () => {
    // Cập nhật  giá trị mới cho isLogin là true
    setLogin(true)
  };

  const handleLogout = () => {
    setLogin(false);
  }

  const renderInfo = () => {
    if (isLogin) {
      return (
        <div>
          <h1>Hello {username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Vui lòng login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )
    }
  }
  return (
    <>
      <h1>State</h1>
      {renderInfo()}
      
    </>
  )
};
