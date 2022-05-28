import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 0 1.875rem;

  & > div {
    display: flex;
    gap: 10px;
    height: 100%;

    & > button {
      display: flex;
      background: none;
      border: none;
      width: 100%;
      padding: 10px;

      :hover {
        color: var(--white);
        background-color: var(--gray-200);
        border-radius: 100%;
      }
    }
  }
`;

export const CalendarDatesContainer = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-items: center;
  }
`;

export const DaysNameContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 15px;
  justify-items: center;
  list-style: none;
  margin-bottom: 1.25rem;

  & > li {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const DayContainer = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.125rem;
  grid-column-start: ${({ columnStartDay }) => columnStartDay};
  border-radius: 5px;
  width: 100%;
  color: ${({ isToday, isSameMonth, selectedDay }) =>
    selectedDay
      ? 'var(--white)'
      : isToday && !selectedDay
      ? 'var(--blue-300)'
      : isSameMonth && !selectedDay
      ? 'var(--black)'
      : 'var(--gray-200)'};
  background-color: ${({ selectedDay }) => selectedDay && 'var(--blue-300)'};
  height: 3.125rem;

  :hover {
    border-radius: 5px;
    color: var(--white);
    background-color: var(--blue-300);
    transition: all 0.2s ease-in-out;
  }
`;
