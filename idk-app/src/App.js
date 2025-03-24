import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./unitytesting/Build/unitytesting.loader.js",
  dataUrl: "./unitytesting/Build/unitytesting.data",
  frameworkUrl: "./unitytesting/Build/unitytesting.framework.js",
  codeUrl: "./unitytesting/Build/unitytesting.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Kaitlin Chow</h1>
      </div>
    </div>
  );
}

export default App;