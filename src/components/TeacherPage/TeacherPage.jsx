import { MarkupTeachersList } from "components/MarkupTeachersList/MarkupTeachersList";
import { PrioritySelect } from "components/PrioritySelect/PrioritySelect";
import { Main } from "./TeacherPage.styled";

export const TeacherPage = () => {
  return (
    <Main>
      <PrioritySelect />
      <MarkupTeachersList />
    </Main>
  );
};
