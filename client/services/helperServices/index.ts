import axios from "axios";
import config from "../../config";
// import store from "../../redux/store";

interface APIProps {
  endpoint: string;
  data: any;
  token?: string;
  withAuth?: boolean;
  withHeader?: boolean;
  noToken?: boolean;
  withoutDialog?: boolean;
  isBlob?: boolean;
  withUsername?: boolean;
}

export const apiLocalService = async ({ endpoint, data }: APIProps) => {
  //   const currentToken = store.getState().tokens.bearerToken;
  return axios
    .post(
      `${config.localApiUrl}/api/${endpoint}`,
      data
      //   currentToken
      //     ? {
      //         headers: {
      //           Authorization: `Bearer ` + currentToken,
      //         },
      //       }
      //     : {}
    )
    .then(async (res) => {
      if (res.status != 200) {
        console.log();
        // store.dispatch(
        //   dialogConfig({
        //     isDialogShown: true,
        //     title: "Warning",
        //     description: res.data.message,
        //   })
        // );
      }
      return res;
    })
    .catch(async (err) => {
      console.log("err local = ", err, err.response);
      //   store.dispatch(
      //     dialogConfig({
      //       isDialogShown: true,
      //       title: "Warning",
      //       description: err.response.data.message,
      //     })
      //   );
      return err;
    });
};
