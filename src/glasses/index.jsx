import React, { useState } from "react";
import data from "./data.json"; 

export default function Glasses() {
  const [glasses] = useState(data); 

  
  const [selectedGlass, setSelectedGlass] = useState(glasses.length > 0 ? glasses[0] : null);

  
  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass); 
  };

  const renderGlassesList = () => {
    return glasses.map((glassItem) => (
      <li key={glassItem.id || glassItem.url}>
        <button onClick={() => handleSelectGlass(glassItem)}>
          <img src={glassItem.url} alt={glassItem.name} />
        </button>
      </li>
    ));
  };

  return (
    <div className="glasses-app-container"> 
      <h1>TRY GLASSES APP ONLINE</h1>

      <div className="model-display">
        
        <img src="./glassesImage/model.jpg" alt="Model" className="base-model-img" />

        {/* //render nếu có kính được chọn */}
        {selectedGlass && ( 
          <img
            src={selectedGlass.url}
            alt={selectedGlass.name}
            className="overlay-glass-img"
          />
        )}

        {/* Hiển thị thông tin kính bên cạnh người mẫu  */}
        {selectedGlass && (
          <div className="glass-details">
            <h3>{selectedGlass.name}</h3>
            <p>Giá: {selectedGlass.price} USD</p>
            <p>{selectedGlass.desc}</p>
          </div>
        )}
      </div>

      <ul className="glasses-thumbnails">
        {renderGlassesList()}
      </ul>
    </div>
  );
}