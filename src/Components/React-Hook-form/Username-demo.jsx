import { useForm } from "react-hook-form";
export function UserNamevalidation() {
  // const { register, handleSubmit } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=""> User Name</label>
        <br></br>
        <input
          type="text"
          {...register("userName", {
            required: "user Name is required",
            minLength: {
              value: 4,
              message: "Minimum age is ",
            },

            maxLength: {
              value: 8,
              message: "Maximum age is 8",
            },
            validate: (data) => {
              if(data.trim()=="") return "white Space is not allow";
              return true;
            },
          })}
        />
        <br></br>
        <p>{errors.userName?.message}</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

// only simple username , not required option
/*
export function UserNamevalidation() {
  const{
    register ,
    handleSubmit
  } = useForm();
  function onSubmit(data){
    console.log(data);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=""> User Name</label>
        <br></br>
        <input type="text" {...register("userName")}/>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
*/

/**
 * in side register optional seaction only below mention thing allow
 required
minLength
maxLength
min
max
pattern
validate  // function
valueAsNumber
valueAsDate
setValueAs
disabled
onChange
onBlur
deps
 */
