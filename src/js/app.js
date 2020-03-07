import data from './array';

const findBy = (property, value) => (array) => {
  if (array[property] !== undefined && array[property].includes(value)) {
    return true;
  }
  return false;
};

const finder = findBy('type', 'help');
data.filter(finder);

export default findBy;
