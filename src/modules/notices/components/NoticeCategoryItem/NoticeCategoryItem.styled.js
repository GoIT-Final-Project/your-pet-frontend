import styled from "styled-components";

export const Card = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 288px;
  height: 456px;
  background-color: #fff;
  border-radius: 0px 0px 40px 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 288px;
  height: 288px;
`;

export const Image = styled.img`
  display: block;
  width: 288px;
  height: 288px;
`;

export const AddToFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
`;

export const HeartIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover svg path,
  &:focus svg path {
    fill: #54adff;
  }
`;

export const Category = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  top: 12px;
  left: 0px;
  width: 126px;
  height: 32px;
  padding: 11px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 16px 16px 0px;
  background: #cce4fb;
`;

export const City = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #cce4fb;
`;

export const Years = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #cce4fb;
`;

export const Gender = styled.p`
  margin: 0;
  padding: 0;

  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  width: 80px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: #cce4fb;
`;

export const CardTextInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 24px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;

  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #111;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  border-radius: 40px;
  border: 2px solid #54adff;
  color: #54adff;
  background-color: #ffffff;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;
