import { BackdropModal } from 'components/BackdropModal/BackdropModal';
import {
  Modal,
  Title,
  SecondText,
  SecondTitle,
  WrapRadioInput,
  WrapInput,
  Input,
  Img,
  ImgText,
  WrapImg,
  WrapModal
} from './ModalTeacher.styled';
import { MarkupButton } from 'components/MarkupButton/MarkupButton';

export const ModalTeacher = ({ closeModal, avatar, name, surname }) => {
  return (
    <BackdropModal closeModal={closeModal}>
      <WrapModal>
        <Modal>
        <Title>Book trial lesson</Title>
        <SecondText>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </SecondText>
        <WrapImg>
          <Img src={avatar} />
          <div>
            <ImgText>Your teacher</ImgText>
            <p>
              {name} {surname}
            </p>
          </div>
        </WrapImg>
        <form>
          <SecondTitle>
            What is your main reason for learning English?
          </SecondTitle>
          <WrapRadioInput>
            <label>
              <input type="radio" name="options" value="option1" />
              Career and business
            </label>

            <label>
              <input type="radio" name="options" value="option2" />
              Lesson for kids
            </label>

            <label>
              <input type="radio" name="options" value="option3" />
              Living abroad
            </label>

            <label>
              <input type="radio" name="options" value="option4" />
              Exams and coursework
            </label>

            <label>
              <input type="radio" name="options" value="option5" />
              Culture, travel or hobby
            </label>
          </WrapRadioInput>
          <WrapInput>
            <label>
              <Input type="text" placeholder="Full Name" />
            </label>
            <label>
              <Input type="text" placeholder="Email" />
            </label>
            <label>
              <Input type="text" placeholder="Phone number" />
            </label>
          </WrapInput>
          <MarkupButton title="Book" width="100%" />
        </form>
      </Modal>
      </WrapModal>
    </BackdropModal>
  );
};
