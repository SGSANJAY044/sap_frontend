import React, { useState } from 'react'
import { useAsyncError, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import background from '../../assets/background.png'
import { signup } from '../../actions/auth'

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user_name, setUserName] = useState("");
  const [kongu_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [rollno, setRollNo] = useState("");
  const [year, setYear] = useState("");
  const [classname, setClassName] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup(
        {
          user_name,
          kongu_email,
          password,
          rollno,
          year,
          classname,
          department
        },
        navigate
      )
    );
  }

  return (
    <div className="h-screen  w-100  flex items-center shrink-0 bg-contain" style={{ background: `url(${background})`, backgroundSize: "cover" }}>
      <div className="w-3/5 xl:h-3/5  flex flex-col mx-auto bg-white rounded-2xl">
        <div className="flex flex-col px-8 py-10 pb-4">
          <div className="font-sans text-3xl font-bold text-gray">Sign in</div>
          <div className="font-light">Students Activity Point</div>
        </div>
        <div className="flex w-full flex-col xl:flex-row">
        <div className="xl:w-2/4 w-full h-full flex flex-col px-8 ">
          <form action="" className="flex flex-col h-40 my-4 justify-between">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-2/12 mb-2 p-2 border-2 border-neutral-200 rounded-sm  hover:border-gray-300 focus-visible:border-primarygreen "
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              required />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-2/12 mb-2  p-2 border-2 border-neutral-200 rounded-sm  hover:border-gray-300"
              value={kongu_email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <input
              type="text"
              placeholder="Department"
              className="w-full h-2/12 mb-2  p-2 border-2 border-neutral-200 rounded-sm  hover:border-gray-300"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required />
            <input
              type="passward"
              placeholder="Passward"
              className="w-full h-2/12 mb-2 p-2 border-neutral-200 border-2 rounded-sm  hover:border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </form>
        </div>
        <div className="xl:w-2/4 w-full h-full flex flex-col px-8 ">
          <form action="" className="flex flex-col h-40 my-4 justify-between">
            <input
              type="text"
              placeholder="Roll no"
              className="w-full h-2/12 mb-2 p-2  border-2 border-neutral-200 rounded-sm hover:border-gray-300"
              value={rollno}
              onChange={(e) => setRollNo(e.target.value)}
              required />
            <div className="relative">
              <select
                className="block appearance-none mb-2 h-2/12 w-full bg-white border-neutral-200 border-2 hover:border-gray-300 p-2 rounded-sm  leading-tight focus:outline-none focus:shadow-outline "
                placeholder='ClassName'
                onChange={(e) => setClassName(e.target.value)}
              >
                <option className="text-gray-300">Class</option>
                <option>A</option>
                <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z" /></svg>
                </div>
              </div>
            <div className="relative">
              <select
                className="block appearance-none mb-2  h-2/12 w-full bg-white border-neutral-200 border-2 hover:border-gray-300 p-2 rounded-sm  leading-tight focus:outline-none focus:shadow-outline "
                placeholder='Department'
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option className="text-gray-300">Year</option>
                <option>A</option>
                <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z" /></svg>
                </div>
              </div>
              <input type="text" placeholder="Confrim Passward" className="w-full mb-2  h-2/12 p-2 border-2 border-neutral-200 rounded-sm hover:border-gray-300" required />
            </form>
          </div>
        </div>
        <div className="flex justify-end px-8">
          <div className="h-10 w-32 bg-primarygreen rounded-md my-6 flex align center justify-center text-white font-semibold text-lg hover:bg-white hover:border-primarygreen hover:text-primarygreen">
            <button>Sign in</button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Register
