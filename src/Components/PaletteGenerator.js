import React, { useState, useEffect } from "react";
import axios from "axios";

function PaletteGenerator() {
  const [paleta, setPaleta] = useState();

  useEffect(() => {
    newPaleta();
  }, []);

  const newPaleta = async () => {
    const response = await axios
      .get("https://www.colr.org/json/schemes/random/7", {
        'Cache-Control': 'no-cache',
      })
     setPaleta(response.data.schemes)
  };

  return (
    <div className="contenedor">
        <h1>Palette Generator</h1>
      <button className="boton-generador" onClick={newPaleta}>
        Generate
      </button>
      {paleta
        ? paleta.map((scheme) => (
            scheme.colors.length > 3  ?
            <div className="div-paleta">
              {scheme.colors.map((color, index) => (
                  index < 5 ? <div
                  style={{
                    backgroundColor: `#${color}`,
                    width: "20%",
                    height: "140px",
                  }}
                ></div> : null
                
              ))}
            </div> : null
          ))
        : null}
     
    </div>
  );
}

export default PaletteGenerator;
