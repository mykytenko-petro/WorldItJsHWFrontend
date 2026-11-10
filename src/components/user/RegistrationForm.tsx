import { useForm } from "react-hook-form";
import type { RegistrationInputs } from "../../types/user";
import { useRegisterMutation } from "../../api/base-api";
import "./UserForm.css";

export default function RegistrationForm() {
    const { register, handleSubmit } = useForm<RegistrationInputs>();
    const [ registerUser, { isLoading } ] = useRegisterMutation();
    
    async function onSubmit(data: RegistrationInputs) {
        // TODO: make validation
        try {
            const result = await registerUser(data).unwrap();

            alert(result.email);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="user-form-title">Registration</p>

            <div className="user-form-field">
                <input 
                    className="user-form-input"
                    type="email"
                    placeholder="email"
                    {...register("email")}
                />
            </div>
            
            <div className="user-form-field">
                <input 
                    className="user-form-input"
                    type="password"
                    placeholder="password"
                    {...register("password")}
                />
            </div>

            <div className="user-form-actions">
                <button className="user-form-btn" type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
