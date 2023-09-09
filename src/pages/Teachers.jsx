import { useEffect } from "react";
import { TeacherPage } from "components/TeacherPage/TeacherPage";
import { useDispatch } from "react-redux";
import { getTeachers } from "../redux/teachers/teachersOperation";
import { Outlet } from "react-router-dom";

export const Teachers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return (
    <>
      <TeacherPage />
      <Outlet />
    </>
  );
};
