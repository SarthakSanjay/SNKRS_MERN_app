const Login = () => {
  return (
    <div className="h-52 w-32">
        <label>Email/username</label>
        <input type="email" />
        <label>password</label>
        <input type="password" />
        <button type="submit">Login</button>
    </div>
  )
}

export default Login