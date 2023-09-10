import { nanoid } from 'nanoid';
import { MarkupComment } from '../MarkupComment/MarkupComment';
import { MarkupButton } from '../MarkupButton/MarkupButton';
import { WrapperReadMore, Text, WrapComment } from './MarkupReadMore.styled';
import { useState } from 'react';
import { ModalTeacher } from 'components/ModalTeacher/ModalTeacher';

export const MarkupReadMore = ({
  experience,
  avatar,
  name,
  surname,
  reviews,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrapperReadMore>
      <Text>{experience}</Text>
      <WrapComment>
        {reviews.map(comment => (
          <li key={nanoid()}>
            <MarkupComment comment={comment} />
          </li>
        ))}
      </WrapComment>
      <MarkupButton
        width="232px"
        title="Book trial lesson"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ModalTeacher
          avatar={avatar}
          name={name}
          surname={surname}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </WrapperReadMore>
  );
};
