import React, { useState } from "react";
import data from "./data.json"; 



//Tail wind
export default function Glasses() {
  const [glasses] = useState(data);

  // State để lưu trữ TOÀN BỘ đối tượng kính được chọn
  const [selectedGlass, setSelectedGlass] = useState(glasses.length > 0 ? glasses[0] : null);

  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass);
  };

  const renderGlassesList = () => {
    return glasses.map((glassItem) => (
      <li key={glassItem.id || glassItem.url}>
        <button
          onClick={() => handleSelectGlass(glassItem)}
          // Tailwind classes cho nút thumbnail kính
          className="p-1 border-2 border-transparent rounded-md cursor-pointer transition-all duration-300
                     hover:border-blue-500 hover:translate-y-[-3px] hover:shadow-lg"
        >
          <img src={glassItem.url} alt={glassItem.name} className="w-24 h-auto block" /> 
        </button>
      </li>
    ));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 bg-[url(./glassesImage/background.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="bg-pink-300 rounded-lg shadow-xl p-6 md:p-10 max-w-4xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">TRY GLASSES APP ONLINE</h1>

        <div className="relative flex justify-center items-start mb-10">
          <div className="relative w-72 h-auto mx-5 border border-gray-200 shadow-md bg-white">
            {/* Ảnh người mẫu gốc */}
            <img src="./glassesImage/model.jpg" alt="Model" className="w-full h-auto block" />

            {/* Ảnh kính được overlay lên người mẫu */}
            {selectedGlass && (
              <img
                src={selectedGlass.url}
                alt={selectedGlass.name}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                           w-3/5 h-auto z-10 opacity-60" 
              />
            )}

            {/* Hiển thị thông tin kính bên cạnh người mẫu */}
            {selectedGlass && (
              <div className="absolute bottom-0 left-0 w-full bg-pink-500 bg-opacity-80
                              text-white p-2 text-left box-border">
                <h3 className="text-lg font-semibold mb-1">{selectedGlass.name}</h3>
                <p className="text-sm">Giá: {selectedGlass.price} USD</p>
                <p className="text-xs">{selectedGlass.desc}</p>
              </div>
            )}
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 p-5 bg-gray-200 rounded-lg">
          {renderGlassesList()}
        </ul>
      </div>
    </div>
  );
}
