
import { useEffect } from 'react';
import Countries from "./pages/Countries";
import './App.css'


import icon from "./assets/world.png";

function App() {
    
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = icon;
    document.title = "World API front-end";
  }, []);

  return (
    <>
      <Countries />
    </>

  )
}

export default App
