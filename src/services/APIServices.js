import API from "./config";
import ApiEP from "./ApiEP";

const APIServices = {
  finder: (location, page = "1") =>
    new Promise((resolve, reject) => {
      API.get(ApiEP.FIND_JOBS + `?location=${location}&page=${page}`, {
        headers: {
          Authorization: `token ${process.env.VUE_APP_FIND_WORK_TOKEN}`,
        },
      })
        .then((response) => {
          resolve(response.data);
          console.log(response.data);
        })
        .catch(reject);
    }),
};
export default APIServices;
