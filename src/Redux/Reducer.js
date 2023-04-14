// const rishavJain = (
//   storedata = {
//     name: "Rishav",
//   },
//   action
// ) => {
//   return storedata;
// };
var initialData = {
    name: "Rishav",
  };
  const rishavJain = (storedata = initialData, action) => {
    if (action.type === "name") {
      return {
        name: action.username,
      };
    }
    return storedata;
  };
  
  export default rishavJain;