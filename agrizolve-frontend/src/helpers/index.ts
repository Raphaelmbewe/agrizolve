/* eslint-disable @typescript-eslint/ban-ts-comment */

import toast, { ToastType } from 'react-hot-toast';

export const notify = (type: ToastType, msg: string) =>
  // @ts-ignore
  toast[type](msg);

export const getInitialsFromName = (name: string) => {
  const nameArray = name?.split(' ') ? name?.split(' ') : [];
  if (!name) return '';
  if (nameArray.length >= 2) {
    const FirstLetter = nameArray[0][0];
    const SecondLetter = nameArray[1][0];
    return FirstLetter.toUpperCase() + SecondLetter.toUpperCase();
  } else {
    const lastLetterIndex = nameArray[0].length - 1;
    const FirstLetter = nameArray[0][0];
    const SecondLetter = nameArray[0][lastLetterIndex];
    return FirstLetter.toUpperCase() + SecondLetter.toUpperCase();
  }
};

export const verifyEmailValidity = (input: any) => {
  return input.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  );
};
