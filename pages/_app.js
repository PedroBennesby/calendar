import { GlobalStyles } from '../styles/theme.config';

const Calendar = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default Calendar;
