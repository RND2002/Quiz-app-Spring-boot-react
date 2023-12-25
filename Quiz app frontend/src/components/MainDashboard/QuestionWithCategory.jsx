


// const QuestionWithCategory = ({questionArray}) => {
    
 
  
   
//   return (
//     <div>
//         {/* {questionArray && <QuestionWithCategory questionArray={questionArray} />} */}
//          {questionArray.map((question) => (
//         <div
//           key={question.id}
//           className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden bg-mainColor mt-6"
//         >
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               {question.question}
//             </h2>

//             <div className="p-4 border border-stringColor rounded-xl text-white space-y-4">
//               {[
//                 question.option1,
//                 question.option2,
//                 question.option3,
//                 question.option4,
               
//               ].map((option, optionIndex) => (
//                 <label key={optionIndex} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`options_${question.id}`}
//                     className="mr-2"
//                     value={option}
                     
//                   />
//                   <span  className="text-lg bg-mainColor font-medium">
//                     {option}
                   
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default QuestionWithCategory
// import React, { useState } from 'react';

// const QuestionWithCategory = ({ questionArray }) => {
//   const [showOption5, setShowOption5] = useState(false);

//   const handleOptionClick = () => {
//     setShowOption5(true);
//   };

//   return (
//     <div>
//       {questionArray.map((question) => (
//         <div
//           key={question.id}
//           className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden bg-mainColor mt-6"
//         >
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               {question.question}
//             </h2>

//             <div className="p-4 border border-stringColor rounded-xl text-white space-y-4">
//               {[
//                 question.option1,
//                 question.option2,
//                 question.option3,
//                 question.option4,
//               ].map((option, optionIndex) => (
//                 <label key={optionIndex} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`options_${question.id}`}
//                     className="mr-2"
//                     value={option}
//                     onClick={handleOptionClick} // Call a function on option click
//                   />
//                   <span className="text-lg bg-mainColor font-medium">
//                     {option}
//                   </span>
//                 </label>
//               ))}

//               {showOption5 && ( // Render option5 only if showOption5 is true
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`options_${question.id}`}
//                     className="mr-2"
//                     value={question.correctOption}
//                     onClick={() => setShowOption5(false)} // Hide option5 on selection
//                   />
//                   <span className="text-lg bg-mainColor font-medium">
//                    Correct Answer {question.correctOption}
//                   </span>
//                 </label>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionWithCategory;
// import React, { useState } from 'react';

// const QuestionWithCategory = ({ questionArray }) => {
//   const [selectedAnswers, setSelectedAnswers] = useState(Array(questionArray.length).fill(false));

//   const handleOptionClick = (questionIndex, selectedOptionIndex) => {
//     const updatedAnswers = selectedAnswers.map((answer, index) => index === questionIndex ? selectedOptionIndex : answer);
//     setSelectedAnswers(updatedAnswers);
//   };

//   return (
//     <div>
//       {questionArray.map((question, questionIndex) => (
//         <div
//           key={question.id}
//           className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden bg-mainColor mt-6"
//         >
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               {question.question}
//             </h2>

//             <div className="p-4 border border-stringColor rounded-xl text-white space-y-4">
//               {[
//                 question.option1,
//                 question.option2,
//                 question.option3,
//                 question.option4,
//               ].map((option, optionIndex) => (
//                 <label key={optionIndex} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`options_${question.id}`}
//                     className="mr-2"
//                     value={option}
//                     onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                   />
//                   <span className="text-lg bg-mainColor font-medium">
//                     {option}
//                   </span>
//                 </label>
//               ))}

//               {selectedAnswers[questionIndex] !== false && (
//                 <label className="flex items-center">
//                   <span className="text-lg bg-mainColor font-medium">
//                     {question[`option${selectedAnswers[questionIndex] + 1}`]}
//                   </span>
//                 </label>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionWithCategory;
// import React, { useState } from 'react';

// const QuestionWithCategory = ({ questionArray }) => {
//   const [selectedAnswers, setSelectedAnswers] = useState(Array(questionArray.length).fill(null));

//   const handleOptionClick = (questionIndex, selectedOptionIndex) => {
//     const newSelectedAnswers = [...selectedAnswers];
//     newSelectedAnswers[questionIndex] = selectedOptionIndex;
//     setSelectedAnswers(newSelectedAnswers);
//   };

//   return (
//     <div>
//       {questionArray.map((question, questionIndex) => (
//         <div
//           key={question.id}
//           className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden bg-mainColor mt-6"
//         >
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               {question.question}
//             </h2>

//             <div className="p-4 border border-stringColor rounded-xl text-white space-y-4">
//               {[
//                 question.option1,
//                 question.option2,
//                 question.option3,
//                 question.option4,
//               ].map((option, optionIndex) => (
//                 <label key={optionIndex} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`options_${question.id}`}
//                     className="mr-2"
//                     value={option}
//                     onClick={() => handleOptionClick(questionIndex, optionIndex)}
//                   />
//                   <span className="text-lg bg-mainColor font-medium">
//                     {option}
//                   </span>
//                 </label>
//               ))}

//               {selectedAnswers[questionIndex] !== null && (
//                 <div>
//                   <p className="text-lg bg-mainColor font-medium">
//                     Selected Answer: {question[`option${selectedAnswers[questionIndex] + 1}`]}
//                   </p>
//                   <p className="text-lg bg-mainColor font-medium">
//                     Correct Answer: {question.correctOption}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionWithCategory;
import React, { useState } from 'react';

const QuestionWithCategory = ({ questionArray }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questionArray.length).fill(null));

  const handleOptionClick = (questionIndex, selectedOptionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = selectedOptionIndex === 4 ? null : 4;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      {questionArray.map((question, questionIndex) => (
        <div
          key={question.id}
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden bg-mainColor mt-6"
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
                    onClick={() => handleOptionClick(questionIndex, optionIndex)}
                  />
                  <span className="text-lg bg-mainColor font-medium">
                    {option}
                  </span>
                </label>
              ))}

              {selectedAnswers[questionIndex] === 4 && (
                <div>
                  <p className="text-lg bg-mainColor font-medium">
                    Correct Answer: {question.correctOption}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionWithCategory;







