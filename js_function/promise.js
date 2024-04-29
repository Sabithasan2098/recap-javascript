const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "data is fetching";
    const error = false;
    if (!error) {
      resolve(data);
    } else {
      reject("Internal server error");
    }
  }, 1000);
});
//its a old version------------------->
// fetchData
//   .then((data) => {
//     // console.log(data);
//   })
//   .catch((error) => {
//     // console.log(error);
//   });

//latest version----------------------->
async function getData() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
