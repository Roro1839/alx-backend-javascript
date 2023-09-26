import getBudgetObject from "./7-getBudgetObject.js";

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // eslint-disable-next-line no-shadow
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // eslint-disable-next-line no-shadow
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

