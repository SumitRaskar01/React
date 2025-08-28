//Used React Hook Form

import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

export function ReactHookForm(){

    const { register, handleSubmit, control, formState: {errors} } = useForm()

    function onSubmit(data){
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="form-styling">
                <label htmlFor="username">Name</label>
                <input type="text"{...register("username", {required: "Username is required", 
                    validate: (value) => {
                        if (!/^.[A-Z]/.test(value)) {
                            return "Second character must be Capital";
                        }
                        return true;
}
                })} />
                <p className="error-message">{errors.username?.message}</p>

                <label htmlFor="email">Email</label>
                <input type="text" {...register("email", {pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter email"
                }})}/>
                <p className="error-message">{errors.email?.message}</p>

                <button type="submit">Submit</button>
            </form>
            <DevTool control={control}/>
        </>
    )
}