import { useEffect, useState } from "react";
import "./App.scss";

import { MobileView } from "./Components/Mobile/MobileView";
import { DesktopView} from "./Components/Desktop/DesktopView";


function App() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  const handleResize = () => {
    setTimeout(() => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    }, 350);

  };

  useEffect(() => {
    // añado el evento resize para obtener el ancho de la pantalla dinámicamente
    window.addEventListener("resize", handleResize);
  })

  return (
    <div className="App">
        {windowWidth >= 1023 ? <DesktopView /> : <MobileView />}
    </div>
  );
}

export default App;
