import API from "./config";
import ApiEP from "./ApiEP";

const APIServices = {
  finder: (location) =>
    new Promise((resolve, reject) => {
      API.get(ApiEP.FIND_JOBS + `?location=${location}`, {
        headers: {
          Authorization: `token ${process.env.VUE_APP_FIND_WORK_TOKEN}`,
        },
      })
        .then((response) => resolve(response.data))
        .catch(reject);
    }),
};
export default APIServices;
