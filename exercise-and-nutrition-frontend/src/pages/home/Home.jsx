
import UserCard from '../../components/user_card/UserCard'
import "./home.css"
import React, { useState, useEffect } from 'react';
import { getFiltered } from '../../services/search';
import { getAllUsers } from '../../services/api';
import SkeletonUser from '../../components/skeleton_user/SkeletonUser';


const sampleUser = [
  {
    name: "Olivia",
    gender: "Female",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "JACK",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Building muscle",
    target: "abs",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
  {
    name: "USERNAME",
    gender: "Male",
    age: 21,
    weight: 55,
    height: 175,
    goal: "Loosing Weight",
    target: "All",
    level: "Beginner"
  },
]

const Home = () => {

  const [text, setText] = useState("");

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const filteredItems = getFiltered(text, users)

  const data = Array.from({ length: 30 }, (_, index) => ({
    key: index + 1,
    text: `Component ${index + 1}`,
  }));

  useEffect(() => {
    getAllUsers(setLoading).then(data => setUsers(data))
  }, []);

  return (
    <div className="home-section">
      <div className="home-title">
        <h3>Users</h3>
        <div className="search">
          <input type="text" placeholder='YourName...' onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      <div className="user-card">
        {loading ? data.map(item => {
          return <SkeletonUser data={item}/>
        }) :filteredItems.map((user, index) => {
          return <UserCard user={user} key={index}/>
        })}

      </div>
    </div>
  )
}

export default Home