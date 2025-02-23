import { Link } from "react-router-dom"
import EnrollButton from "./EnrollButton"
import styles from "./CourseCard.module.css"

const CourseCard = ({ course }) => {
  return (
    <div className={styles.card}>
      <img src={course.thumbnail || "/placeholder.svg"} alt={course.name} className={styles.thumbnail} />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <Link to={`/course/${course.id}`}>View Details</Link>
      <EnrollButton courseId={course.id} />
    </div>
  )
}

export default CourseCard

