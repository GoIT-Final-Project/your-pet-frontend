import styled from "styled-components";
import UncheckRoundSVG from "./svg-uncheck";
import CheckRoundSVG from "./svg-check";

export const FilterBtn = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: ${(props) => (props.isExpandedFilter ? "152px" : "40px")};
    height: ${(props) => (props.isExpandedFilter ? "auto" : "40px")};
    gap: 8px;
    background: ${(props) => (props.isExpandedFilter ? "white" : "#c5dff6")};
    color: #54adff;
    /* padding: ${(props) => (props.isExpandedFilter ? "8px" : "8px 20px")}; */
    padding: ${(props) => props.isExpandedFilter && "8px 20px"};
    flex-direction: ${(props) => (props.isExpandedFilter ? "column" : "row")};
    align-items: ${(props) =>
      props.isExpandedFilter ? "flex-start" : "center"};
    justify-content: ${(props) => (props.isExpandedFilter ? "" : "center")};
    border-radius: ${(props) => (props.isExpandedFilter ? "20px" : "50%")};
    border: ${(props) => (props.isExpandedFilter ? "none" : "none")};
  }

  @media (min-width: 768px) {
    width: 152px;
    gap: 8px;
    background: ${(props) => (props.isExpandedFilter ? "white" : "#fff")};
    color: #54adff;
    height: ${(props) => (props.isExpandedFilter ? "auto" : "40px")};
    padding: ${(props) => (props.isExpandedFilter ? "8px" : "8px 20px")};
    flex-direction: ${(props) => (props.isExpandedFilter ? "column" : "row")};
    align-items: ${(props) =>
      props.isExpandedFilter ? "flex-start" : "center"};
    justify-content: ${(props) => (props.isExpandedFilter ? "" : "center")};
    border-radius: ${(props) => (props.isExpandedFilter ? "20px" : "40px")};
    border: ${(props) =>
      props.isExpandedFilter ? "none" : "2px solid #54adff"};
  }

  &:hover,
  &:focus {
    color: ${(props) => !props.isExpandedFilter && "#fef9f9"};
    background: ${(props) =>
      !props.isExpandedFilter &&
      "linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%)"};
  }

  &:hover svg path,
  &:focus svg path {
    stroke: ${(props) => !props.isExpandedFilter && "#fef9f9"};
  }
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
`;

export const FilterItem = styled.li`
  display: flex;
  /* align-items: center; */
  gap: 10px;
  width: 136px;
  /* height: 32px; */
  /* padding: 4px 8px; */
  border-radius: 20px;
  background-color: #cce4fb;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  overflow: hidden;

  flex-direction: ${(props) => (props.isExpandedAge ? "column" : "row")};
  padding: ${(props) => (props.isExpandedAge ? "14px" : "4px 8px")};
  height: ${(props) => (props.isExpandedAge ? "144px" : "32px")};
  align-items: ${(props) => (props.isExpandedAge ? "" : "center")};
`;

export const FilterItemGender = styled.li`
  display: flex;
  gap: 10px;
  width: 136px;

  border-radius: 20px;
  background-color: #cce4fb;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;

  flex-direction: ${(props) => (props.isExpandedGender ? "column" : "row")};
  padding: ${(props) => (props.isExpandedGender ? "14px" : "4px 8px")};
  height: ${(props) => (props.isExpandedGender ? "116px" : "32px")};
  align-items: ${(props) => (props.isExpandedGender ? "" : "center")};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 24px;
  cursor: pointer;

  input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    opacity: 0;
  }

  &:hover {
    color: white;
  }

  &:hover svg path,
  &:focus svg path {
    stroke: white;
  }
`;
