import styled from "styled-components";
import { colors, devices } from "./Variables";

export const DetailSection = styled.section`
  margin-top: 1rem;
  background-color: ${colors.grey_10};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  height: max-content;

  @media screen and (${devices.laptop}) {
    width: ${({ name }) => (name === "schedule" ? "43%" : "100%")};
  }

  @media screen and (${devices.laptopL}) {
    width: ${({ name }) => (name === "schedule" ? "40%" : "100%")};
  }
`;
