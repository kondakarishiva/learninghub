const Register = () => {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Register</h1>
      <form style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Full Name" style={{ margin: "10px", padding: "10px" }} />
        <br />
        <input type="email" placeholder="Email" style={{ margin: "10px", padding: "10px" }} />
        <br />
        <input type="password" placeholder="Password" style={{ margin: "10px", padding: "10px" }} />
        <br />
        <button type="submit" style={{ padding: "10px 20px" }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
