import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  position: absolute;
  top: 25%;
  background-color: var(--white);
  left: 25%;
  box-shadow: 1px 1px 10px -5px rgb(0 0 0 / 75%);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  & > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
      display: flex;
      background: none;
      border: none;
      padding: 10px;

      :hover {
        color: var(--white);
        background-color: var(--gray-200);
        border-radius: 100%;
      }
    }
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > input {
      border-radius: 5px;
      border-color: gray;
      padding: 5px;
      border: 1px solid var(--black);

      :focus-visible {
        outline-color: var(--blue-400);
      }
    }
  }
`;
