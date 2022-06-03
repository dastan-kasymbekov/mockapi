import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import 'bootstrap'
import Form from "./components/Form";

function App() {

  const [students, setStudents] = useState([])
  const [isLoading, setIsloading] = useState(true)


  useEffect(() => {
    axios.get('https://6299dcea7b866a90ec447e8f.mockapi.io/students')
      .then((res) => {
        setStudents(res.data)
        setIsloading(false)
      })
  }, [])

  if (isLoading) {
    return 'Loading...'
  }

  const deleteUser = async (id) => {
    axios.delete(`https://6299dcea7b866a90ec447e8f.mockapi.io/students/${id}`)
    const studentsList = students.filter(item => item.id !== id)
    setStudents(studentsList)
  }

  return (
    <div className="App">
      <div className="p-10 bg-yellow-50">
        <Form/>
      </div>
      <table className="table-auto w-full">
        <thead>
        <tr className="bg-primary text-center bg-blue-500">
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">

            #
          </th>
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
            ФИО Студента
          </th>
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
            Группа
          </th>
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
            Год поступления
          </th>
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
            Телефон
          </th>
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
            Email
          </th>
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
            Delete
          </th>
        </tr>
        </thead>
        <tbody>
        {
          students.map((student) => (
            <tr key={student.id}>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                {student.id}
              </td>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] ">
                {student.name}
              </td>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8] ">
                {student.group}
              </td>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] ">
                {student.year}
              </td>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8] ">
                {student.phone}
              </td>
              <td
                className=" text-center text-dark font-medium text-base  py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8] ">
                {student.email}
              </td>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8] ">
                <button
                  onClick={() => deleteUser(student.id)}
                  className=" border border-red-400 py-1 px-4 text-primary inline-block rounded hover:bg-red-400 hover:text-white ">
                  Delete
                </button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
