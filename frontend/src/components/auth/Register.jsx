const Register = () => {
  const handleClick =() =>{

  }
  return (
    <div className="h-52 w-32">
        <label>Email/username</label>
        <input type="email" />
        <label>password</label>
        <input type="password" />
        <button onClick={handleClick} type="submit">Register</button>
    </div>
  )
}

export default Register