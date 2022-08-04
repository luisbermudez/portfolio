import React from "react";
import RootNavigation from "./RootNavigation";
import HeaderAndFooter from "./components/HeaderAndFooter";

function App() {
  return (
    <div className="App">
      <HeaderAndFooter>
        <RootNavigation />
      </HeaderAndFooter>
    </div>
  );
}

export default App;
