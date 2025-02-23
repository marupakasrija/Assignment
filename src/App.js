import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import CourseListingPage from "./pages/CourseListingPage"
import CourseDetailsPage from "./pages/CourseDetailsPage"
import StudentDashboard from "./pages/StudentDashboard"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  )
}

export default App

