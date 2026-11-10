import PostCardList from "./post/PostCardList";
import "./App.css";
import LoginForm from "./user/LoginForm";
import RegistrationForm from "./user/RegistrationForm";

function App() {
  return (
    <div className="app-container">
      <header className="board-header">
        <h1>/tech/ - Technology &amp; Programming</h1>
      </header>
      <main>
        <LoginForm />
        <RegistrationForm />
        <PostCardList />
      </main>
    </div>
  );
}

export default App;
