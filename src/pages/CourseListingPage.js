"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCourses } from "../redux/coursesSlice"
import CourseCard from "../components/CourseCard"
import SearchBar from "../components/SearchBar"
import Pagination from "../components/Pagination"
import styles from "./CourseListingPage.module.css"

const CourseListingPage = () => {
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.list)
  const status = useSelector((state) => state.courses.status)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 9

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCourses())
    }
  }, [status, dispatch])

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <h1>Course Listing</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.courseGrid}>
        {currentCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}

export default CourseListingPage

