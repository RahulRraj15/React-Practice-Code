import { useFormik } from "formik";

export function Formik_1() {
  const loginFormdata = useFormik({
    initialValues: {
      Name: "",
      Age: "",
      Phn: "",
      Sub: "-1",
    },
  });
  return (
    <div className="d-flex justify-content-center mt-5">
      <form action="" onSubmit={loginFormdata.handleSubmit} noValidate>
        <label>Enter Your Name</label>
        <br></br>
        <input type="text" name="Name" onChange={loginFormdata.handleChange} />
        <br />
        <br />

        <label>Enter Your age</label>
        <br></br>
        <input type="text" name="Age" onChange={loginFormdata.handleChange} />
        <br />
        <br />

        <label>Enter Your Phone Number</label>
        <br></br>
        <input type="text" name="Phn" onChange={loginFormdata.handleChange} />
        <br />
        <br />

        <div>
          <select name="Sub" onChange={loginFormdata.handleChange}>
            <option value="-1" disabled selected>
              Select Subject
            </option>
            <option>Core Java</option>
            <option>Html , css , js</option>
            <option>Oracle</option>
            <option>Spring Boot</option>
          </select>
        </div>
        <input
          type="submit"
          value="Submit"
          className="p-2 mt-2 fw-bold text-danger bg-black"
        />
      </form>
    </div>
  );
}
