import { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import {
  Container,
  CalendarHeader,
  CalendarDatesContainer,
  DaysNameContainer,
  DayContainer,
} from './styles';
import Modal from './components/Modal/index';

const CalendarContainer = () => {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const [selectedDay, setSelectedDay] = useState(today);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const handleDaySelection = (day) => {
    setSelectedDay(day);
    setModalIsOpen(true);
  };

  const handleNextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const handlePreviusMonth = () => {
    const firstDayPreviusMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPreviusMonth, 'MMM-yyyy'));
  };

  return (
    <Container>
      <CalendarHeader>
        <h1>{format(firstDayCurrentMonth, 'MMMM yyyy')}</h1>
        <div>
          <button onClick={handlePreviusMonth}>
            <FaChevronLeft />
          </button>
          <button onClick={handleNextMonth}>
            <FaChevronRight />
          </button>
        </div>
      </CalendarHeader>
      <CalendarDatesContainer>
        <DaysNameContainer>
          <li>S</li>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
        </DaysNameContainer>
        <div>
          {days.map((day, index) => {
            return (
              <DayContainer
                key={day.toString()}
                isToday={isToday(day)}
                isSameMonth={isSameMonth(day, firstDayCurrentMonth)}
                selectedDay={isEqual(day, selectedDay)}
                onClick={() => handleDaySelection(day)}
                columnStartDay={index === 0 && getDay(day)}
              >
                <time dateTime={format(day, 'dd-MM-yyyy')}>
                  {format(day, 'd')}
                </time>
              </DayContainer>
            );
          })}
        </div>
      </CalendarDatesContainer>
      {modalIsOpen && (
        <Modal selectedDay={selectedDay} closeModal={setModalIsOpen} />
      )}
    </Container>
  );
};

export default CalendarContainer;
