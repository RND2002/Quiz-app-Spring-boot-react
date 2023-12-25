import { apiClient } from "./ApiClient";

export const getQuestion=()=>apiClient.get(`/question/allQuestion`)

export const retreiveQuestionByCategory=(category)=>apiClient.get(`/question/category/${category}`)