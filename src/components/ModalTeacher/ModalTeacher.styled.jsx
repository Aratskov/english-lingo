import styled from 'styled-components';

export const WrapModal = styled.div`
  position: fixed;
  box-sizing: border-box;
  padding: 60px 30px;

  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 30px 30px 0 0;
  background: #fff;

  max-height: 80%;
  overflow: hidden;

  @media screen and (min-width: 450px) {
    position: relative;

    border-radius: 30px;
    width: 566px;
    padding: 64px;
  }
`;

export const Modal = styled.div`
  overflow-y: auto;
  max-height: 450px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const SecondText = styled.p`
  color: rgba(18, 20, 23, 0.8);
  margin: 20px 0;
  font-size: 16px;
  line-height: 1.38;
`;

export const SecondTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
`;

export const WrapRadioInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin: 20px 0 40px;
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  margin-bottom: 40px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 16px 18px;

  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline-color: #f4c550;

  cursor: pointer;
`;

export const Img = styled.img`
  height: 44px;
  width: 44px;

  border-radius: 50%;
`;
export const ImgText = styled.p`
  color: #8a8a89;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;
export const WrapImg = styled.div`
  display: flex;
  gap: 14px;
  margin: 20px 0 40px;
`;
