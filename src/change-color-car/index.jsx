import {useState} from "react"
// export default function ChangeColorCar () {
//     const [imgPath, setImgPath] = useState("./images/red-car.jpg");
//     const handleChangeRedCar = () => {
//         setImgPath("./images/red-car.jpg")
//     };
//     const handleChangeSilverCar = () => {
//         setImgPath("./images/silver-car.jpg")
//     };
//     const handleChangeBlackCar = () => {
//         setImgPath("./images/black-car.jpg")
//     };

//   return (
//     <div>
//         <h1>ChangeColorCar</h1>
//         <div style={{display: "flex"}}>
//             <div>
//                 <img src={imgPath} width="500px" />
//             </div>
//             <div>
//                 <button onClick={handleChangeRedCar}>Red</button>
//                 <button onClick={handleChangeSilverCar}>Silver</button>
//                 <button onClick={handleChangeBlackCar}>Black</button>
//             </div>
//         </div>
//     </div>
//   );
// }

// cach 2
export default function ChangeColorCar () {
    const [imgPath, setImgPath] = useState("./images/red-car.jpg");
   const handleChangeColor = (path) => {
    setImgPath(path);
   }

  return (
    <div>
        <h1>ChangeColorCar</h1>
        <div style={{display: "flex"}}>
            <div>
                <img src={imgPath} width="500px" />
            </div>
            <div>
                <button onClick={() => handleChangeColor("./images/red-car.jpg")}>Red</button>
                <button onClick={() => handleChangeColor("./images/silver-car.jpg")}>Silver</button>
                <button onClick={() => handleChangeColor("./images/black-car.jpg")}>Black</button>
            </div>
        </div>
    </div>
  );
}
