import styled from "styled-components";
import { colors } from "./Variables";

export const StyledButton = styled.button`
  background-color: ${colors.secondary_100};
  color: ${colors.grey_10};
  padding: 0.7rem 0.8rem;
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

export const EventCategoryButton = styled(StyledButton)`
  background-color: ${colors.grey_10};
  color: ${colors.grey_90};
  font-size: 11px;
  padding: rem 0.4rem;
`;

export const AdminCategoryButtonLarge = styled(StyledButton)`
  background-color: ${({ eventStatus }) =>
    eventStatus === "Active"
      ? colors.primary_30
      : eventStatus === "Draft"
      ? colors.yellow_90
      : eventStatus === "Past"
      ? colors.grey_60
      : colors.primary_30};  
  color: ${colors.grey_90};
  font-size: 14px; 
  font-weight: 500;
  padding: 0.9rem 2rem;<
  // width: ${({ active }) => (active ? "50px" : "30px")}
`;

export const AdminCategoryButtonSmall = styled(AdminCategoryButtonLarge)`
  font-size: 11px;
  padding: 0.3rem 0.9rem;
`;

export const AdminCreateButton = styled(StyledButton)`
  background-color: ${colors.primary_100};
  font-size: 14px;
  font-weight: 600;
  padding: 0.9rem 1rem;
  cursor: pointer;
`;

export const CreateBookingButton = styled(StyledButton)`
  background-color: ${colors.primary_100};
  font-size: 14px; 
  font-weight: 600;
  padding: 0.9rem 1rem;
  cursor: pointer;
`;

export const BookingFilterButton = styled(StyledButton)`
  background-color: ${({ isActive }) =>
    isActive ? colors.primary_100 : colors.secondary_100};

  box-shadow: ${({ isActive }) =>
    isActive ? "inset 0 0 10px #202020ad" : "none"};

  &:hover {
    box-shadow: inset 0 0 10px #202020ad;
    cursor: pointer;
  }
`;
