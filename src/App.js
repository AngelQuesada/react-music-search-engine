import { Loader } from "./components/Loader";
import { MusicList } from "./components/MusicList";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Loader />
      <Navbar />
      <MusicList />
    </div>
  );
}

export default App;
