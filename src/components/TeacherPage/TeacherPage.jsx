import { MarkupTeachersList } from "components/MarkupTeachersList/MarkupTeachersList";
import { PrioritySelect } from "components/PrioritySelect/PrioritySelect";
import { Main } from "./TeacherPage.styled";

export const TeacherPage = ({isFavorits}) => {
  return (
    <Main>
      {!isFavorits?<PrioritySelect />:null }
      <MarkupTeachersList isFavorits={isFavorits}/>
    </Main>
  );
};
