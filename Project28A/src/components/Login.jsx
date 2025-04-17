import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try{
      const res = await fetch ("https://fsa-recipe.up.railway.app/api/auth/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      const result = await res.json();
      console.log(result)

      if(result.token){
        localStorage.setItem("authToken", result.token)
        setToken(result.token);
        navigate("/");

      }else{
        setError(result.error)
      }
    }catch(error){
      setError(error.messgae)
    }
  }


    return (
      <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <label>
              Username:
                  <input name="username"
                  onChange={(event)=> setUsername(event.target.value)}
                  value={username}/>
              </label>
              <label>
              Password:
                  <input name="password"
                  onChange={(event)=> setPassword(event.target.value)}
                  value={password}/>
              </label>
              <button>SUBMIT</button>
          </form>
      </div>
    );
  }