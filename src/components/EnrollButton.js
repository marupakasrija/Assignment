import { useDispatch, useSelector } from "react-redux"
import { enrollCourse } from "../redux/coursesSlice"
import styles from "./EnrollButton.module.css"

const EnrollButton = ({ courseId }) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses)

  const isEnrolled = enrolledCourses.includes(courseId)

  const handleEnroll = () => {
    if (isAuthenticated) {
      dispatch(enrollCourse(courseId))
    } else {
      alert("Please login to enroll in courses")
    }
  }

  return (
    <button onClick={handleEnroll} disabled={isEnrolled} className={styles.enrollButton}>
      {isEnrolled ? "Enrolled" : "Enroll"}
    </button>
  )
}

export default EnrollButton

