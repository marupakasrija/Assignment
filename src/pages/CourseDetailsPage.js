"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import EnrollButton from "../components/EnrollButton"
import styles from "./CourseDetailsPage.module.css"

const CourseDetailsPage = () => {
  const { id } = useParams()
  const course = useSelector((state) => state.courses.list.find((c) => c.id === Number.parseInt(id)))
  const [expandSyllabus, setExpandSyllabus] = useState(false)

  if (!course) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <h1>{course.name}</h1>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Location:</strong> {course.location}
      </p>
      <div>
        <strong>Prerequisites:</strong>
        <ul>
          {course.prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))}
        </ul>
      </div>
      <div className={styles.syllabus}>
        <h2>Syllabus</h2>
        <button onClick={() => setExpandSyllabus(!expandSyllabus)}>
          {expandSyllabus ? "Hide Syllabus" : "Show Syllabus"}
        </button>
        {expandSyllabus && (
          <div>
            {course.syllabus.map((item, index) => (
              <div key={index} className={styles.syllabusItem}>
                <h3>
                  Week {item.week}: {item.topic}
                </h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <EnrollButton courseId={course.id} />
    </div>
  )
}

export default CourseDetailsPage

