
import { apiClient } from "./ApiClient";



export const createQuizWithForm=(category,numQ,title,token)=>apiClient.post(`/quiz/create?category=${category}&numQ=${numQ}&title=${title}`,category,numQ,title,token)
export const getQuizQuestion=(id)=>apiClient.get(`/quiz/get/${id}`)
export const submitResponse=(id,responses,token)=>apiClient.post(`/quiz/submit/${id}`,responses,token)