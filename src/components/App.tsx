import PostCardList from "./post/PostCardList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="board-header">
        <h1>/tech/ - Technology &amp; Programming</h1>
      </header>
      <main>
        <PostCardList />
      </main>
    </div>
  );
}

export default App;
