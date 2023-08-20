// import { shimmer_card_unit, shimmer_menu_card_unit } from "../config";

// // Shimmer card to display with animation
// const CardShimmer = () => {
//   return (
//     <div className="shimmer-card">
//       <div className="shimmer-img stroke animate"></div>
//       <div className="shimmer-title stroke animate"></div>
//       <div className="shimmer-tags stroke animate "></div>
//       <div className="shimmer-details stroke animate "></div>
//     </div>
//   );
// };

// export const MenuShimmer = () => {
//   return (
//     <div className="restaurant-menu">
//       <div className="restaurant-summary stroke-color animate">
//         <img className="shimmer-img stroke animate" />
//         <div className="restaurant-summary-details">
//           <h2 className="shimmer-w40  stroke animate"></h2>
//           <p className="shimmer-w20 stroke animate"></p>
//           <div className="shimmer-w60  stroke animate">
//           </div>
//         </div>
//       </div>

//       <div className="restaurant-menu-content">
//         <div className="menu-items-container">
//           <div className="menu-title-wrap ">
//             <h3 className="shimmer-w40 stroke animate"></h3>
//             <p className="shimmer-w20 stroke animate"></p>
//           </div>
//           <div className="menu-items-list">
//             { Array(shimmer_menu_card_unit).fill("").map( (element, index)  => 
//             <div className="shimmer-menu-card" key={index}>
//               <div className="shimmer-item-details">
//                 <h3 className="shimmer-w40  stroke animate"></h3>
//                 <p className="shimmer-w20  stroke animate"> </p>
//                 <p className="shimmer-w60  stroke animate"></p>
//               </div>
//               <div className="shimmer-img-wrapper">
//                 <img className="shimmer-img stroke animate" /> 
//                 <div className="shimmer-btn stroke animate"> </div>
//               </div>
//             </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       {/* create a new Array instance using Array() constructor and map through every element of array */}
//       {Array(shimmer_card_unit).fill("").map((element, index) => {
//         return <CardShimmer key={index} />;
//       })}
//     </div>
//   );
// };
// export default Shimmer;

const Shimmer = () => {
  return (
    <div className="flex gap-8 flex-wrap mt-4 shadow-lg" data-testid="shimmer">
      {Array(20)
        .fill("")
        .map((e,index) => (
          <div key={index} className="w-52 ">
            <p className="bg-gray-200 w-full h-32 mb-2 rounded-lg"></p>
            <div className="flex flex-col gap-3">
              <p className="bg-gray-200 w-44 h-3"></p>
              <p className="bg-gray-200 w-40 h-3"></p>
              <p className="bg-gray-200 w-40 h-3"></p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;

