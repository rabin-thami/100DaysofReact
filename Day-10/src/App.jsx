import { useEffect, useState } from "react";
import { db } from "./firebase"; // Import db instance from firebase.js
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import InitState from "./InitState";
import Question from "./Question.jsx";
import data from "./data.js";

export default function App() {
  const questionArr = data.results;

  // For initializing user input
  const [init, setInit] = useState(true);
  const [ipExists, setIpExists] = useState(false)
  const [form, setForm] = useState({
    userName: "",
    category: "",
    userIp: ""
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    setInit(false);
  }


  ///

  async function pushDataInFirebase() {
    // Push score and IP address to Firestore
    try {
      await addDoc(collection(db, "userData"), {
        username : form.userName,
        score: Number(score),
        ip: form.userIp
      });
      console.log("Score and IP address saved to Firestore!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    async function checkIP() {
      const ipQuery = query(collection(db, "userData"), where("ip", "==", form.userIp));
      const ipSnapshot = await getDocs(ipQuery);
      if (ipSnapshot.size !== 0) {
        setIpExists(true)
        setInit(false);
      }
    }
    checkIP();
  
    async function getIP() {
      try {
        const res = await fetch("https://api.ipify.org/?format=json");
        const data = await res.json();
        setForm(prevData => ({ ...prevData, userIp: data.ip }));
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    }
    getIP();
  }, []);
  




  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  function quizz() {
    return questionArr.map(item => {
      const correctAnswer = item.correct_answer;
      const incorrectAnswers = item.incorrect_answers;
      const allAnswers = [...incorrectAnswers, correctAnswer];
      const shuffledAnswers = shuffleArray(allAnswers);
      return {
        question: item.question,
        correctAnswer: correctAnswer,
        answers: shuffledAnswers
      };
    });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleAnswerClick = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(prevScore => prevScore + 5);
    }
    handleNextQuestion();
    if (currentQuestionIndex === questionArr.length - 1) {
      pushDataInFirebase();
    }
  };

  const totalScore = questionArr.length === 0 ? 0 : (score / questionArr.length) * 100;


  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };


  return (
    <main>
      <div className="shapes first"></div>
      <div className="shapes second"></div>
      <div className="container">
        {init ? (
          <InitState
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit}
            ipExists={ipExists}
          />
        ) : (<Question
            question={quizz()[currentQuestionIndex]}
            handleAnswerClick={handleAnswerClick}
            showScore={score}
            userName = {form.userName}
            restartQuiz = {restartQuiz}
          />
        )}
      </div>
    </main>
  );
}
