import { useForm } from "react-hook-form";
export function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function submitData(data) {
    console.log(data);
    alert("form submited")
  }
  return (
    <div className="d-flex justify-content-center p-2">
      <form onSubmit={handleSubmit(submitData)} noValidate>
        <label>User Name</label>
        <br />
        <input
          type="text"
          {...register("userName", {
            required: "user Name is required",
            minLength: {
              value: 4,
              message: "must be 4 chracter",
            },
            validate: (data) => {
              if (data.trim() == "") return "only white space is not allow";
              return true;
            },
          })}
        />
        <br />
        <p className="text-danger"> {errors.userName?.message}</p>
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          {...register("pass", {
            required: "must enter password",
            minLength: {
              value: 6,
              message: "must be 6 chracter",
            },
            maxLength: {
              value: 10,
              message: " <=10 char",
            },
          })}
        />
        <br />
        <p className="text-danger">{errors.pass?.message}</p>
        <br />
        <label>Mobile Number</label>
        <br />
        <input
          type="number"
          {...register("mob", {
            required: "must enter mobile number",
            maxLength: {
              value: 10,
              message: "mob number must contain 10 digit",
            },
          })}
        />
        <br />
        <p className="text-danger">{errors.mob?.message}</p>
        <br />
        <label>Select City</label>
        <br />
        <select {...register("city", { required: "must select city name" })}>
          <option value="" disabled selected>
            -- Select --
          </option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>
        <br />
        <p className="text-danger">{errors.city?.message}</p>
        <br />
        <label>Gender</label>
        <br />
        <input
          type="radio"
          value="Male"
          {...register("gender", { required: "must select gender" })}
        />
        Male
        <input
          type="radio"
          value="Female"
          {...register("gender", { required: "must select gender" })}
        />
        Female
        <input
          type="radio"
          value="Other"
          {...register("gender", { required: "must select gender" })}
        />
        Other
        <br />
        <p className="text-danger">{errors.gender?.message}</p>
        <br />
        <label>Subjects</label>
        <br />
        <input type="checkbox" {...register("skills",{
          validate : (data)=>{
           return data?.length > 0 || "atleast select one subject "
          }
        })}/>
        Java
        <br />
        <input type="checkbox" {...register("skills")}/>
        React
        <br />
        <input type="checkbox" {...register("skills")}/>
        Spring
        <br />
        <p className="text-danger">{errors.skills?.message}</p>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
