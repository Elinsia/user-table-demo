export const convertDateToAge = (isoDate) => {
  const formatDate = new Date(isoDate).getTime();
  const todayDate = new Date().getTime();
  const age = Math.floor(
    (todayDate - formatDate) / (1000 * 60 * 60 * 24 * 365),
  );

  return age;
};

export const MAX_DATE = new Date().toISOString().split('T')[0];

export const validation = {
  name: {
    required: 'Field is required',
    pattern: {
      value: /^[a-zA-Z ]*$/,
      message: 'No numbers and cyrillic',
    },
  },
  birthday: {
    required: 'Field is required',
    pattern: {
      value: /^\d{4}[- /.]\d{2}[- /.]\d{2}$/,
      message: 'Birthday incorrect',
    },
    max: MAX_DATE,
  },
  about: {
    required: 'Field is required',
  },
};
