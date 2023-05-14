import moment from 'moment';

export const getError = (touched, errors, field) => {
  if (touched[field]) {
    return errors[field] || '';
  }
  return null;
};

export const hasErrors = (errors) => Object.keys(errors).length !== 0;
export const isTouched = (touched) => Object.keys(touched).length !== 0;
export const getDateFormatted = (date) => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
