import React from "react";
import { CategoryButton } from "../styles/components/StyledButton";
import { StyledDot } from "../styles/components/StyledDot";

const CategoryLabel = ({ category }) => {
  return (
    <CategoryButton>
      <StyledDot category={category.toUpperCase()} />
      <span>{category}</span>
    </CategoryButton>
  );
};

export default CategoryLabel;
