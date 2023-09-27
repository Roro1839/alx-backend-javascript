// eslint-disable-next-line no-unused-vars
export default function getFullResponseFromAPI(success) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      resolve({ status: 200, body: "Success"});
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}

