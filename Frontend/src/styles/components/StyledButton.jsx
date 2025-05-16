import styled from "styled-components";
import { colors } from "./Variables";

export const StyledButton = styled.button`
  background-color: ${colors.secondary_100};
  color: ${colors.grey_10};
  padding: 0.8rem 1rem;
  border-radius: 30px;
  font-size: 1rem;
  border: none;
`;

export const StatusButton = styled(StyledButton)`
  background-color: ${({ status }) =>
    status === "PENDING"
      ? colors.secondary_100
      : status === "CONFIRMED"
      ? colors.primary_100
      : status === "CANCELLED"
      ? colors.cool_grey_20
      : colors.secondary_100};
  color: ${({ status }) =>
    status === "PENDING" || status === "CONFIRMED"
      ? colors.grey_10
      : colors.grey_80};
`;

export const CategoryButton = styled(StyledButton)`
  background-color: ${colors.grey_30};
  color: ${colors.secondary_100};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;
