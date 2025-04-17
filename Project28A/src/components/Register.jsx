import { useState } from "react"
import { useNavigate } from "react-router-dom"



export default function Register({setToken}) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length < 8){
      setError("username must be longer than 8 charachters.")
    }else{
      try{
        const res = await fetch("https://fsa-recipe.up.railway.app/api/auth/register",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
        const result = await res.json()
        console.log(result)

        if (result.token){
          alert("Youre all signed up! Please log in.")
          navigate("/login")
        }else{
          setError(result.error)
        }
        
        
      }catch(error){
        setError(error.message)
      }
    }
  }



    return (
      <>
        <div className="register">
          <h1>Register account here!</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
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
      </>
    );
  }