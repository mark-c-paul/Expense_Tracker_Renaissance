import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Total = () => {
  const { expenses } = useContext(GlobalContext);
  const costs = expenses.map(expense => expense.cost);
  const sum = costs.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Total: {moneyFormatter(sum)}</h4>
    </>
  )
}