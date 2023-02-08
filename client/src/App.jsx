// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Forget from "./Forget";

// Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
       <Route path="/" element={<Forget />} />         
        </Routes>
 
      </Router>
    </div>
  );
}

export default App;