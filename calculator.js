export function add(a, b) {
  if (isNaN(a)) return undefined;
  return a + b;
}

export function sub(a, b) {
  if (isNaN(a)) return undefined;
  return a - b;
}

export function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

//module.exports = { sub, add, filterByTerm };
