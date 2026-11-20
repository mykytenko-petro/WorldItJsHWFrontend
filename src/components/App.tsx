import PostCardList from "./post/PostCardList";
import "./App.css";
import LoginForm from "./user/LoginForm";
import RegistrationForm from "./user/RegistrationForm";
import { useGetMeQuery } from "../api/base-api";

function App() {
    const { data: user, isLoading } = useGetMeQuery();

    return (
        <div className="app-container">
            <header className="board-header">
                <h1>/tech/ - Technology &amp; Programming</h1>
            </header>
            <main>
                {isLoading ? (
                    <div className="user-form-status loading">
                        Loading user...
                    </div>
                ) : user ? (
                    <div className="user-profile">
                        <p className="user-profile-title">Authorized User</p>
                        <p className="user-profile-email">
                            Logged in as: <strong>{user.email}</strong>
                        </p>
                    </div>
                ) : (
                    <>
                        <LoginForm />
                        <RegistrationForm />
                    </>
                )}
                <PostCardList />
            </main>
        </div>
    );
}

export default App;
