import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Countries from './Components/App';
import reportWebVitals from './reportWebVitals';
import Garage from './Components/Garage';
import StudentsListComp from './Components/StudensListComp';
import YouTubeVideosList from './Components/YouTubeVideosList';




const cars = [
   {model:2016, provider:"Subaro", color:"Gray"},
   {model:2013, provider:"Mazda", color:"Wight"},
   {model:2018, provider:"Lexus", color:"Black"},
]

const students = [
   {studentId:23422, studentName:"moshe", studentGrade:90},
   {studentId:23423, studentName:"Osher", studentGrade:80},
   {studentId:23424, studentName:"Rina", studentGrade:70},
   {studentId:23425, studentName:"Eylon", studentGrade:60},
   {studentId:23426, studentName:"Tomer", studentGrade:50},
]

function GetVideosList(){
   
   let videos = [
      {videoTitle:"Young Ronaldinho Substituted and Changed The Game !!!", videoSrc:"https://www.youtube.com/embed/Qi7IsPz5V6g", videoHeight:280 , videoHeight:157.5} ,
      {videoTitle:"Time To Cool Off with Mr Bean | Classic Mr Bean", videoSrc:"https://www.youtube.com/embed/NVhmq-pB_cs", videoHeight:280 , videoHeight:157.5} ,
      {videoTitle:"I Created a SaaS Only Using No Code Tools", videoSrc:"https://www.youtube.com/embed/00i3JRAQ_w4", videoHeight:280 , videoHeight:157.5}   
   ]
   
   return videos;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   <Countries></Countries>
   <Garage cars={cars}></Garage>
   <StudentsListComp students={students}></StudentsListComp>
   <YouTubeVideosList videos={GetVideosList()}></YouTubeVideosList>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
