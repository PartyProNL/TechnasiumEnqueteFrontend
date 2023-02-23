export const BackendUtil = (() => {
    const getBackendUrl = () => {
      return process.env.NODE_ENV === "development"
        ? "http://localhost:5555"
        : "http://54.36.178.219:32887";
    };
  
    const sendAnswer = async (anserBody: any, email: string) => {
      console.log({
        email: email,
        surveyData: anserBody,
      });
  
      return await networkTool.postRequest(`${getBackendUrl()}/response`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          surveyData: await anserBody,
        }),
      });
    };
  
    return {
      sendAnswer,
    };
  })();
  
  const networkTool = (() => {
    const postRequest = (url: string, data: RequestInit): Promise<any> => {
      return new Promise(async (resolve, reject) => {
        return fetch(url, {
          method: "POST",
          headers: data.headers,
          body: data.body,
        })
          .then(async (response) => {
            if (!response.ok) {
              console.log("Error: " + response);
  
              reject(response);
            }
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            console.log("Error: " + error);
          });
      });
    };
  
    return {
      postRequest,
    };
  })();