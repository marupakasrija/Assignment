import { useSelector } from "react-redux"
import styles from "./StudentDashboard.module.css"

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) =>
    state.courses.list.filter((course) => state.courses.enrolledCourses.includes(course.id)),
  )

  return (
    <div className={styles.container}>
      <h1>Student Dashboard</h1>
      <div className={styles.courseGrid}>
        {enrolledCourses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate || "Not specified"}</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${course.progress || 0}%` }}></div>
            </div>
            <p>Progress: {course.progress || 0}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentDashboard

