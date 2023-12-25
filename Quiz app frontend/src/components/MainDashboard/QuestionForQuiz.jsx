// import React, { useEffect, useState } from "react";
// import { getQuizQuestion, submitResponse } from "../api/QuizApiCall";
// import { useParams } from "react-router-dom";

// const Question
import React, { useEffect, useState } from "react";
import { getQuizQuestion, submitResponse } from "../api/QuizApiCall";
import { useNavigate, useParams } from "react-router-dom";
import ResultShow from "./ResultShow";


const QuestionForQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [marks,setMarks]=useState(null)
 

  const { id } = useParams();

  async function retreiveQuestionOFQuiz() {
    try {
      const response = await getQuizQuestion(id);
      setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleResponseChange = (questionId, selectedValue) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: selectedValue,
    }));
  };

  //   const submitQuiz = async () => {

  const submitQuiz = async () => {
    try {
      const responsesArray = Object.keys(responses).map((questionId) => ({
        id: questionId,
        response: responses[questionId],
      }));

      const response = await submitResponse(id, responsesArray);
      if (response.status === 200) {
        console.log("Response submitted successfully");
        setMarks(response.data)
        //navigate(`/result?marks=${marks}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    retreiveQuestionOFQuiz();
  }, []);

  return (
    <div className="mt-12">
      {questions.map((question) => (
        <div
          key={question.id}
          className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden bg-mainColor mt-6"
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">
              {question.question}
            </h2>

            <div className="p-4 border border-stringColor rounded-xl text-white space-y-4">
              {[
                question.option1,
                question.option2,
                question.option3,
                question.option4,
              ].map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    name={`options_${question.id}`}
                    className="mr-2"
                    value={option}
                    onChange={() => handleResponseChange(question.id, option)}
                  />
                  <span className="text-lg bg-mainColor font-medium">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button
        className="bg-stringColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
        onClick={submitQuiz}
      >
        Submit Quiz
      </button>
      {marks !== null && (
        <ResultShow marks={marks} />
      )}
    </div>
  );
};

export default QuestionForQuiz;
