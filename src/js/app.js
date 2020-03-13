import data from './array';

const findBy = (property, value) => (array) => (array[property] === value);

const finder = findBy('type', 'help');
data.filter(finder);

export default findBy;
