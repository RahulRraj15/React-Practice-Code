import { useFormik } from "formik";

export function FormikDemo() {
  function ValidateUser(user) {
    let errors = {};

    if (user.Name.length === 0) {
      errors.Name = "User Name Required";
    } else {
      if (user.Name.length < 4) {
        errors.Name = "Name too short";
      }
    }

    if (user.Age.length === 0) {
      errors.Age = "Age required";
    } else {
      if (isNaN(user.Age)) {
        errors.Age = "Age must be a number";
      }
    }

    if (user.Mobile.length === 0) {
      errors.Mobile = "Mobile Required";
    } else {
      if (!user.Mobile.match(/^\+91\d{10}$/)) {
        errors.Mobile = "Invalid Mobile";
      }
    }

    if (user.City === "-1") {
      errors.City = "Please select your city";
    }

    if (user.Gender === "") {
      errors.Gender = "Please select gender";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      Name: "",

      Age: "",

      Mobile: "",

      City: "-1",

      Gender: "",
    },

    validate: ValidateUser,

    onSubmit: (user) => {
      console.log(user);
    },
  });

  return (
    <div className="container-fluid">
      <form className="mt-3" onSubmit={formik.handleSubmit} noValidate>
        <dl>
          <dt>Name</dt>

          <dd>
            <input type="text" name="Name" onChange={formik.handleChange} />
          </dd>

          <dd className="text-danger">{formik.errors.Name}</dd>

          <dt>Age</dt>

          <dd>
            <input type="text" name="Age" onChange={formik.handleChange} />
          </dd>

          <dd className="text-danger">{formik.errors.Age}</dd>

          <dt>Mobile</dt>

          <dd>
            <input type="text" name="Mobile" onChange={formik.handleChange} />
          </dd>

          <dd className="text-danger">{formik.errors.Mobile}</dd>

          <dt>Your City</dt>

          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="-1">Select City</option>

              <option>Delhi</option>

              <option>Hyd</option>
            </select>
          </dd>

          <dd className="text-danger">{formik.errors.City}</dd>

          <dt>Gender</dt>

          <dd>
            <input
              type="radio"
              onChange={formik.handleChange}
              name="Gender"
              value="Male"
            />{" "}
            <label>Male</label>
            <input
              type="radio"
              onChange={formik.handleChange}
              name="Gender"
              value="Female"
            />{" "}
            <label>Female</label>
          </dd>

          <dd className="text-danger">{formik.errors.Gender}</dd>
        </dl>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
