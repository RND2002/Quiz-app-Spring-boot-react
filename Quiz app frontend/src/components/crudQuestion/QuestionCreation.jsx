import React, { useState } from "react";

import { useAuth } from "../AuthContext";
import { createQuizWithForm } from "../api/QuizApiCall";
import { getQuestion } from "../api/QuestionApi";
import { useNavigate } from "react-router-dom";



const QuestionCreation = () => {
  const navigate=useNavigate()
    const authContext=useAuth()
    const [formData,setFormData]=useState({
        category:'',
        numQ:'',
        title:''
    });

   
    //const {id}=useParams()

    // getQuestion()
    // .then(response=>{
    //     console.log(response)
    // }).catch(err=>console.log(err))

    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    
  async function handleForm(e) {
        e.preventDefault()
        // const data={
        //     category:formData.category,
        //     num:formData.num,
        //     title:formData.title,
            
        // }

        await createQuizWithForm(formData.category,formData.numQ,formData.title,authContext.token)
        .then(response=>{
            if(response.status===201){
              console.log(response)
               const id=response.data
              // console.log(typeof id);
              navigate(`/quizQuestion/${id}`)

            }
        }).catch(error=>console.log(error))

  }
  return (
    <div className="flex justify-center mt-16">
      <div class="w-full max-w-xs">
        <form
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleForm}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="category"
            >
              Category
            </label>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              name="category"
              type="text"
              required
              placeholder="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Number of Question
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="numQ"
              name="numQ"
              type="number"
              placeholder="Number of Questions"
              required
              value={formData.numQ}
              onChange={handleInputChange}
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Title of Quiz
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Title of Quiz"
              required
              value={formData.title}
              onChange={handleInputChange}
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-mainColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionCreation;
