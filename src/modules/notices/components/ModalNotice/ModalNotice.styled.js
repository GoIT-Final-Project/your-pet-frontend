import styled from "styled-components";

export const ModalNoticeBox = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 681px;
  height: 540px;
  padding: 24px 31px;
  border-radius: 40px;
  background: #fff;

  @media (max-width: 767px) {
    width: 280px;
    height: auto;
    border-radius: 20px;
    padding: 44px 20px 16px 20px;
  }
`;

export const Image = styled.img`
  // display: block;
  width: 262px;
  height: 298px;

  border-radius: 0px 0px 40px 40px;
  background: lightgray 0px -4.16px / 100% 131.822% no-repeat;

  @media (max-width: 767px) {
    width: 240px;
    height: auto;
    border-radius: 0px 0px 40px 40px;
    background: lightgray 0px -14.355px / 100% 150.131% no-repeat;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 44px;
  left: 31px;
  width: 126px;
  height: 32px;
  padding: 11px 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: #cce4fb;

  color: #111;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const ModalNoticeWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 28px;

  @media (max-width: 767px) {
    flex-flow: row wrap;
    gap: 12px;
    margin-bottom: 13px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 26px;
  background-color: transparent;
  border: transparent;
  stroke: #54adff;

  width: 24px;
  height: 24px;
  padding: 0;

  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
  }

  :hover,
  :focus {
    stroke: rgb(255, 193, 7);
  }
`;

export const Title = styled.h1`
  width: 321px;
  margin-bottom: 20px;

  color: #000;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 24px;
    letter-spacing: -0.24px;
    margin-bottom: 22px;
  }
`;

export const ModalNoticeInfoList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Comments = styled.p`
  width: 618px;
  margin-bottom: 70px;

  color: #000;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.64px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.56px;
    margin-bottom: 12px;
  }
`;

export const CommentsBold = styled.span`
  color: #000;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.64px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.56px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  width: 129px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: #54adff;
  border: 2px solid #54adff;

  color: #fef9f9;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    position: absolute;
    right: 177px;
    bottom: 24px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 40px;
    // padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #54adff;
  }

  :hover,
  :focus {
    border: transparent;
    color: #fff;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;

export const ContactLink = styled.a`
  display: flex;
  width: 129px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0;

  border-radius: 40px;
  border: 2px solid #54adff;
  color: #54adff;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  @media (min-width: 768px) {
    position: absolute;
    right: 31px;
    bottom: 24px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid #54adff;
    margin-bottom: 8px;
  }

  :hover,
  :focus {
    border: transparent;
    color: #fff;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;

export const AddressLink = styled.a`
  color: #ffc107;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  :hover,
  :focus {
    color: rgb(84, 173, 255);
  }
`;

export const ModelItemInfo = styled.li`
  display: flex;
  gap: 70px;
  color: #000;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    gap: 20px;
  }
`;

export const Key = styled.p`
  width: 70px;
`;
export const Value = styled.p`
  /* width: 61px; */
`;
