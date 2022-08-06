import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import SearchExercies from '../../components/SearchExercies/SearchExercies'
import Exercises from '../../components/Exercises/Exercises'
const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [currentPage, setCurrentPage] = useState(1)


  return (
    <div>
      <Header />
      <SearchExercies setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setCurrentPage={setCurrentPage} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default Home