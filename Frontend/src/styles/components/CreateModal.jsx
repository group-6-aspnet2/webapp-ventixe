import styled from "styled-components";
import { colors } from "./Variables";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    background-color: ${colors.grey_10};
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    position: relative
`;

export const CloseModalButton = styled.button`
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${colors.grey_100};
    cursor: pointer;

    &:hover {
    background-color: ${colors.grey_30};
    }
`;