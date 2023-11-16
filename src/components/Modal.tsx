import styled from 'styled-components';
import { useAppDispatch } from '../redux/hooks';
import { closeModal } from '../redux/features/nav/navSlice';
import { Action } from '@reduxjs/toolkit';
type ModalProps = {
  info: string;
  action: (_id: string) => void;
  _id: string;
};
const Modal = ({ info, action, _id }: ModalProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(action(_id) as unknown as Action);
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <div>
        <h2>Are you sure?</h2>
        <p>{info}</p>
        <h5> Bad things will happen!</h5>
        <div className="button-container">
          <button type="button" onClick={() => dispatch(closeModal())}>
            Cancel
          </button>
          <button type="button" onClick={handleDelete}>
            Confirm
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};
export default Modal;
const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 75%);
  display: grid;
  place-items: center;
  div {
    width: 100%;
    height: fit-content;
    max-width: 500px;
    background-color: var(--clr-white);
    border-radius: var(--radius);
    padding: 1rem;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    place-items: center;
    h2 {
      font-size: 2rem;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    h5 {
      font-size: 1.5rem;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      text-transform: capitalize;
    }
    .button-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        width: 49%;
        padding: 0.5rem 0;
        border-radius: var(--radius);
        border: none;
        font-size: 1.2rem;
        text-transform: capitalize;
        cursor: pointer;
        color: var(--clr-white);
      }
      button:first-child {
        background-color: #53ad53;
      }
      button:last-child {
        background-color: #e92222;
      }
    }
  }
`;
