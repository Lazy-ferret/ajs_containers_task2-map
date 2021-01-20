import ErrorRepository from '../errorrepository';

test('should to return error with description', () => {
  const error = new ErrorRepository(1, 'This kind of unit is already exists');
  expect(error.translate(1)).toBe('This kind of unit is already exists');
});

test('should to return unknown error', () => {
  const error = new ErrorRepository(1, 'This kind of unit is already exists');
  expect(error.translate(4)).toBe('Unknown error');
});

// test('should throw error cause the name too long', () => {
//   const received = () => new Character('OlegOlegovich', 'Bowman');
//   const expected = 'Имя должно содержать от 2 до 10 символов';
//   expect(received).toThrowError(expected);
// });

// test('should throw error cause the type is wrong', () => {
//   const received = () => new Character('Oleg', 'Gunman');
//   const expected = 'Такого типа нет в списке';
//   expect(received).toThrowError(expected);
// });
