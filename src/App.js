import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./components/Write";
import Read from "./components/Read";
import UpdateRead from "./components/UpdateRead";

function App() {
  return (
    <div className="App">
      
      <Router>

        <Routes>
          <Route path="/" element={ <Write />} />
          <Route path="/write" element={ <Write />} />
          <Route path="/read" element={ <Read />} />
          <Route path="/updateread" element={ <UpdateRead />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
