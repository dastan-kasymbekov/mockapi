import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import 'bootstrap'
import AddUserModal from "./AddUserModal";

function App() {
  const [students, setStudents] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const deleteUser = async (id) => {
    axios.delete(`https://6299dcea7b866a90ec447e8f.mockapi.io/students/${id}`)
    const studentsList = students.filter(item => item.id !== id)
    setStudents(studentsList)
  }

  const handleEdit = (student) => {
    setEditingUser(student)
    setOpenModal(true)
  }

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

  return (
    <div>
      {
        openModal &&
        <AddUserModal setOpenModal={setOpenModal}
                      students={students}
                      setStudents={setStudents}
                      editingUser={editingUser}
                      setEditingUser={setEditingUser}
                      />
      }

      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px]">

        </div>
      </div>


      <table className="table-auto w-full">
        <thead>
        <tr className="bg-primary text-center bg-violet-500">
          <th
            className=" w-1/7 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
            <button
              onClick={() => setOpenModal(true)}
              className="border border-green-400 py-1 px-4 text-primary inline-block rounded bg-green-400 text-white">
              Add new user</button>
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
                className=" text-center text-dark font-medium text-base  py-5 px-2 bg-white border-b border-[#E8E8E8] ">
                {student.email}
              </td>
              <td
                className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-r border-[#E8E8E8] ">
                <button
                  onClick={() => handleEdit(student)}
                  className="border border-yellow-500 py-1 px-4 text-primary inline-block hover:bg-yellow-600 rounded bg-yellow-500 text-white">
                  Edit
                </button> <button
                  onClick={() => deleteUser(student.id)}
                  className="border border-red-500 py-1 px-4 text-primary inline-block rounded hover:bg-red-600 bg-red-500 text-white ">
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
