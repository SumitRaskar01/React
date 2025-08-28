import useFormSubmit from "./useFormSubmit";
import { useForm } from "../node_modules/react-hook-form/dist"

export function Form2() {
    const { loading, error, success, submitForm } = useFormSubmit()
    const { register, handleSubmit, reset, formState: {errors} } = useForm()


    const onSubmit = async (data) => {
        await submitForm(data)
        reset()
    }

    return (
    <>
        <form className="form-styling" onSubmit={handleSubmit(onSubmit)}>

            <div className="fields">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your Name" {...register("name", {required: "Name is Required"})}/>
            </div>

            <div className="fields">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your Email" {...register("email", {required: "Email is Required"})} />
            </div>

            <div className="fields">
                <label htmlFor="message">Message</label>
                <input type="text" placeholder="Enter your Message" {...register("message", {required: "Message is Required"})} />
            </div>

            <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
    </>
    )
}