import axios from "axios";
import { useState, useEffect } from "react";
import { Course } from "../../shared/types";
import CardCourse from "./CardCourse";

const CoursesList = () => {
  const [courses, setCourses] = useState<Course[]>();
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/api/course`)
      .then((respones) => setCourses(respones.data))
      .catch((error) => console.error("Error Fetching date", error));
  }, []);

  return (
    <>
      {courses && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mt-5 w-4/5 mx-auto gap-5">
          {courses.map((s) => (
            <CardCourse
              _id={s._id}
              key={s._id}
              title={s.title}
              subject={s.subject}
              description={s.description}
              grade_level={s.grade_level}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CoursesList;
