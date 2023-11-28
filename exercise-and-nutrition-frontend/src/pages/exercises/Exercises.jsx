import React, { useState, useEffect } from 'react';
import { getFiltered } from '../../services/search';
import ExerciseCard from '../../components/exercise_card/ExerciseCard';
import "./exercise.css"
import { getAllExercises } from '../../services/api';
import SkeletonExercise from '../../components/skeleton_exercise/SkeletonExercise';

const sampleExercise = [
  {
    "name": "3/4 sit-up",
    "body_part": "waist",
    "equipment": "body weight",
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground. Place your hands behind your head with your elbows pointing outwards. Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle. Pause for a moment at the top, then slowly lower your upper body back down to the starting position. Repeat for the desired number of repetitions."
  },
  {
    "name": "45° side bend",
    "body_part": "waist",
    "equipment": "body weight",
    "target": "abs",
    "instructions": "Stand with your feet shoulder-width apart and your arms extended straight down by your sides. Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee. Pause for a moment at the bottom, then slowly return to the starting position. Repeat on the other side. Continue alternating sides for the desired number of repetitions."
  },
  {
    "name": "air bike",
    "body_part": "waist",
    "equipment": "body weight",
    "target": "abs",
    "instructions": "Lie flat on your back with your hands placed behind your head. Lift your legs off the ground and bend your knees at a 90-degree angle. Bring your right elbow towards your left knee while simultaneously straightening your right leg. Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg. Continue alternating sides in a pedaling motion for the desired number of repetitions."
  },
  {
    "name": "all fours squad stretch",
    "body_part": "upper legs",
    "equipment": "body weight",
    "target": "quads",
    "instructions": "Start on all fours with your hands directly under your shoulders and your knees directly under your hips. Extend one leg straight back, keeping your knee bent and your foot flexed. Slowly lower your hips towards the ground, feeling a stretch in your quads. Hold this position for 20-30 seconds. Switch legs and repeat the stretch on the other side."
  },
  {
    "name": "alternate heel touchers",
    "body_part": "waist",
    "equipment": "body weight",
    "target": "abs",
    "instructions": "Lie flat on your back with your knees bent and feet flat on the ground. Extend your arms straight out to the sides, parallel to the ground. Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel. Return to the starting position and repeat on the left side, reaching your left hand towards your left heel. Continue alternating sides for the desired number of repetitions."
  },
  {
    "name": "alternate lateral pulldown",
    "body_part": "back",
    "equipment": "cable",
    "target": "lats",
    "instructions": "Sit on the cable machine with your back straight and feet flat on the ground. Grasp the handles with an overhand grip, slightly wider than shoulder-width apart. Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together. Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position. Repeat for the desired number of repetitions."
  },
  {
    "name": "ankle circles",
    "body_part": "lower legs",
    "equipment": "body weight",
    "target": "calves",
    "instructions": "Sit on the ground with your legs extended in front of you. Lift one leg off the ground and rotate your ankle in a circular motion. Perform the desired number of circles in one direction, then switch to the other direction. Repeat with the other leg."
  }
]


const Exercises = () => {

  const [text, setText] = useState("");
  const [exercises, setExercises] = useState([])

  const filteredItems = getFiltered(text, exercises)

  const [loading, setLoading] = useState(true)

  const data = Array.from({ length: 50 }, (_, index) => ({
    key: index + 1,
    text: `Component ${index + 1}`,
  }));


  useEffect(() => {
    getAllExercises(setLoading).then((exercise) => setExercises(exercise))
  }, []);
  return (
    <div className="exercise-section">
      <div className="exercise-title">
        <h3>Exercise</h3>
        <div className="search">
          <input type="text" placeholder='Search...' onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <div className="exercise-card">
        {loading ? data.map((item, index) => {return <SkeletonExercise item={item} key={index}/>}) :
          filteredItems.map((exercise, index) => {
            return <ExerciseCard exercise={exercise} key={index} />
          })
        }

      </div>
    </div>
  )
}

export default Exercises