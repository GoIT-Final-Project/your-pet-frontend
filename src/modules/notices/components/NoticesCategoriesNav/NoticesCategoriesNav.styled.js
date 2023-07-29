import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoticesNavMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  /* position: relative; */
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    gap: 92px;
    width: 704px;
  }

  @media (min-width: 1280px) {
    gap: 403px;
    width: 1248px;
  }
`;

export const NoticesNavWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* margin-bottom: 24px; */
  width: 100%;

  @media (max-width: 767px) {
    width: 205px;
  }

  @media (max-width: 1279px) {
    max-width: 320px;
  }
`;

export const FilterAndAddPetBtnWrap = styled.div`
  display: flex;
  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  border-color: transparent;
  text-decoration: none;
  color: ${(props) => (props.active === props.to ? "#fef9f9" : "#54adff")};
  background: ${(props) => (props.active === props.to ? "#54adff" : "#cce4fb")};

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.56px;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: #54adff;
  }
`;

export const FilterCategoryWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;

  @media (max-width: 767px) {
    width: 280px;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 auto;
  }
`;

export const FilterCategoryBtn = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 20px;
  border: transparent;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: #54adff;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 120%;
`;
