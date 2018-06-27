export const required = value => value ? undefined : 'Required';

export const notEmpty = value => '' ? 'Must not be empty': undefined;

export const isFiveCharLong = value => value.length === 5 ? undefined : 'Must be a 5 digit number';

export const isNumber = value => (typeof value) === 'number' ? undefined : 'Must be a number';