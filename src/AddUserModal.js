import React from 'react';
import axios from "axios";
import {useState} from "react";


const AddUserModal = ({students, setStudents, setOpenModal, editingUser, setEditingUser}) => {
  const [newStudent, setNewStudent] = useState({
    name: editingUser?.name || "",
    group: editingUser?.group || "",
    year: editingUser?.year || "",
    email: editingUser?.email || "",
    phone: editingUser?.phone || "",
  })

  const updateUser = async (e) => {
    e.preventDefault();
    const {data: updatedUser} = await axios.put(`https://6299dcea7b866a90ec447e8f.mockapi.io/students/${editingUser.id}`, newStudent)
    const updateStudentsList = students.map(item => item.id === editingUser.id ? updatedUser : item)
    setStudents(updateStudentsList)
    setOpenModal(false)
  }

  const handleChange = (e) => {
    setNewStudent({...newStudent, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadUser = await axios.post('https://6299dcea7b866a90ec447e8f.mockapi.io/students', newStudent)
    setStudents([...students, uploadUser.data])
    setNewStudent({
      name: "",
      group: "",
      year: "",
      email: "",
      phone: "",
    })
  }

  return (
    <div className="fixed justify-center flex w-full bg-white p-6">
      <div className="absolute right-9 top-9 cursor-pointer" onClick={() => {
        setOpenModal(false)
        setEditingUser(null)
      }}>
        x
      </div>
      <form onSubmit={editingUser ? updateUser : handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={newStudent.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="group"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Group
          </label>
          <input
            type="text"
            name="group"
            id="group"
            value={newStudent.group}
            onChange={handleChange}
            placeholder="MUGI-17"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="year"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Year of admission
          </label>
          <input
            type="number"
            name="year"
            id="year"
            value={newStudent.year}
            onChange={handleChange}
            placeholder="Enter your year of admission"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={newStudent.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <
          div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            E-mail
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={newStudent.email}
            onChange={handleChange}
            placeholder="Enter your e-mail"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div>
          <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            {'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserModal;