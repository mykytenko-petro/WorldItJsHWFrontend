import { useForm } from "react-hook-form";
import type { LoginInputs } from "../../types/user";
import { useLoginMutation } from "../../api/base-api";
import "./UserForm.css";

export default function LoginForm() {
    const { register, handleSubmit } = useForm<LoginInputs>();
    const [ loginUser, { isLoading } ] = useLoginMutation();
    
    async function onSubmit(data: LoginInputs) {
        // TODO: make validation
        try {
            const result = await loginUser(data).unwrap();

            alert(result.email);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="user-form-title">Login</p>

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
