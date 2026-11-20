import { useForm } from "react-hook-form";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { LoginInputs } from "../../types/user";
import { useLoginMutation } from "../../api/base-api";
import "./UserForm.css";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<LoginInputs>({
        mode: "onChange"
    });

    const [loginUser, { isLoading }] = useLoginMutation();

    async function onSubmit(data: LoginInputs) {
        try {
            await loginUser(data).unwrap();
            reset();
        } catch (err) {
            const error = err as FetchBaseQueryError;
            const serverMessage = (error.data as { message?: string })?.message;

            if (error.status === 400 || error.status === 401) {
                setError("root", {
                    type: "server",
                    message: serverMessage || "Invalid email or password"
                });
            } else if (error.status === 404) {
                setError("root", {
                    type: "server",
                    message: serverMessage || "User not found"
                });
            } else if (error.status === "FETCH_ERROR") {
                setError("root", {
                    type: "server",
                    message: "Network error. Failed to connect to server"
                });
            } else if (error.status === "TIMEOUT_ERROR") {
                setError("root", {
                    type: "server",
                    message: "Request timed out. Please try again"
                });
            } else if (typeof error.status === "number" && error.status >= 500) {
                setError("root", {
                    type: "server",
                    message: serverMessage || "Server error. Please try again later"
                });
            } else {
                setError("root", {
                    type: "server",
                    message: serverMessage || "Failed to log in. Please try again"
                });
            }
        }
    }

    return (
        <form noValidate className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="user-form-title">Login</p>

            {errors.root && (
                <div className="user-form-status error">{errors.root.message}</div>
            )}

            <div className="user-form-field">
                <input
                    className={`user-form-input ${errors.email ? "has-error" : ""}`}
                    type="email"
                    placeholder="email"
                    {...register("email", {
                        required: "Email is required",
                        maxLength: {
                            value: 100,
                            message: "Email is too long"
                        }
                    })}
                />
                {errors.email && (
                    <span className="user-form-error">{errors.email.message}</span>
                )}
            </div>

            <div className="user-form-field">
                <input
                    className={`user-form-input ${errors.password ? "has-error" : ""}`}
                    type="password"
                    placeholder="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 4,
                            message: "Password must be at least 4 characters"
                        }
                    })}
                />
                {errors.password && (
                    <span className="user-form-error">{errors.password.message}</span>
                )}
            </div>

            <div className="user-form-actions">
                <button className="user-form-btn" type="submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
