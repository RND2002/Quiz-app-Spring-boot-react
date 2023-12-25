import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthProvider, { useAuth } from './AuthContext'
import LoginComponent from './LoginComponent'
import Navbar from './Navbar'
import DashBoard from './DashBoard'
import MainDashBoard from './MainDashboard/MainDashBoard'
import QuestionCreation from './crudQuestion/QuestionCreation'
import QuestionForQuiz from './MainDashboard/QuestionForQuiz'
import ResultShow from './MainDashboard/ResultShow'
import QuestionWithCategory from './MainDashboard/QuestionWithCategory'
import Footer from './Footer'

const MainApp = () => {
  function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Navbar/>
       
          <Routes>
          <Route path="/" Component={DashBoard} />
            <Route path='/login' Component={LoginComponent}/>
          
          <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <MainDashBoard />
                            </AuthenticatedRoute> 
                        } />
          <Route path='/welcome/:username/createQuiz' element={
                            <AuthenticatedRoute>
                                <QuestionCreation />
                            </AuthenticatedRoute> 
                        } />
            
          <Route path='/quizQuestion/:id' Component={QuestionForQuiz}></Route>
          <Route path='/questions/category' Component={QuestionWithCategory}></Route>
          
        </Routes>
        <Footer/>
        </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default MainApp
