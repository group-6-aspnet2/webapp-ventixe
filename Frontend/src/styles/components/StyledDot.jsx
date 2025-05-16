import styled from "styled-components";
import { colors } from "./Variables";

export const StyledDot = styled.span`
  display: inline-block;
  background-color: ${({ category }) =>
    category === "DIAMOND"
      ? colors.cool_grey_40
      : category === "PLATINUM"
      ? colors.primary_100
      : category === "GOLD"
      ? colors.primary_50
      : category === "SILVER"
      ? colors.secondary_100
      : category === "STANDARD"
      ? colors.grey_10
      : "black"};
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;
