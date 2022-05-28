import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { Container, ModalContent } from './styles';
import { format } from 'date-fns';

const Modal = (props) => {
  const { selectedDay, closeModal } = props;
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');

  return (
    <Container>
      <ModalContent>
        <span>
          <h2>{format(selectedDay, 'MMMM dd, yyyy')} </h2>
          <button onClick={() => closeModal(false)}>
            <CgClose />
          </button>
        </span>
        <form>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type='time'
            placeholder='Time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type='submit'>Save</button>
        </form>
      </ModalContent>
    </Container>
  );
};

export default Modal;
