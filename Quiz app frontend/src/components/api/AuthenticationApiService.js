import { apiClient } from "./ApiClient";

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`
    ,{
        headers: {
            Authorization: token
        }
    }
    )
    // export const createQuizWithForm = (formData, headers) => {
    //     const request = {
    //       method: "POST",
    //       url: `/quiz/create`,
    //       headers,
    //       data: formData,
    //     };
      
    //     return apiClient(request);
    //   };
// export const executeJwtAuthenticationService
//     = (username, password) => 
//         apiClient.post(`/authenticate`,{username,password})