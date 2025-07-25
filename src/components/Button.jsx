import styled from 'styled-components';

const CreateButton = styled.button`
  width: 7rem;
  height: 50px;
  background-color: var(--subBg200);
  border-radius: 20px;
  font-family: var(--buttonFont);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return (
    <>
      <CreateButton onClick={onClick}>{children}</CreateButton>
    </>
  );
};

export default Button;
