import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage";



function App() {
 
  const [loggedUer, setLoggedUser] = useState(null)


  return (
    <div className="App">
   <MainPage />
    </div>
  );
}

export default App;
