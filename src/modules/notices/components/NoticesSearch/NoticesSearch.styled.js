import styled from "styled-components";

export const ContainerNoticesSearch = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  position: relative;

  width: 280px;
  height: 44px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 608px;
    height: 44px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 14px 10px 13px 20px;

  @media (min-width: 768px) {
    padding: 10px 20px;
  }

  border-radius: 24px;
  border: none;
  outline: transparent;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  color: #888;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
`;

export const BtnsWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;

  @media (min-width: 768px) {
    right: 20px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SubmitBtn = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background-color: #fff;
  padding: 0;
`;

export const ResetBtn = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background-color: #fff;
  padding: 0;
`;
