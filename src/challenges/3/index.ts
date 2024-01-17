/*
 * Challenge 3 - JavaScript/TypeScript Development
 * This challenge is broken into a series of small tasks.
 * In general, you want to add code to each function below to accomplish the stated task.
 * Your code must pass the associated tests - you can use "npm run test" to run the tests.
 */

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  rating: number;
  cities: string[];
}

const employees: Employee[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    rating: 4,
    cities: ["New York", "Chicago", "New Jersey"],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    rating: 2,
    cities: ["Virginia", "New Jersey"],
  },
  {
    id: 3,
    firstName: "Rick",
    lastName: "Flair",
    rating: 3,
    cities: ["Phoenix", "Chicago"],
  },
  {
    id: 4,
    firstName: "Hulk",
    lastName: "Hogan",
    rating: 1,
    cities: ["New York", "Boston"],
  },
  {
    id: 5,
    firstName: "Ricky",
    lastName: "Bobby",
    rating: 5,
    cities: ["New Hampshire"],
  },
];

//**********************************************************//
//*
//*  Goal: Order employees from the highest
//*  rating to the lowest, highest being 5
//*
//**********************************************************//
export const sortEmployeeByRating = (): Employee[] => {
  return [];
};

//**********************************************************//
//*
//*  Goal: Get employee with the lowest rating. If ratings
//*  change, the method should still be able to return the employee
//*  with the lowest rating regardless of the previous data
//*
//**********************************************************//
export const getEmployeeWithLowestRating = (): Employee => {
  return employees[0];
};

//**********************************************************//
//*
//*  Goal: Get average rating of all employees
//*
//**********************************************************//
export const getTheAverageRatingForEmployees = (): number => {
  return 0;
};

//**********************************************************//
//*
//*  Goal: Get cities starting with New
//*  Expected result: ['New Hampshire, New York', 'New Jersey']
//*
//**********************************************************//
export const getEmployeesCitiesStartingWithNew = (): string[] => {
  return [];
};

//**********************************************************//
//*
//*  Goal: Get all unique cities from employee cities
//*
//**********************************************************//
export const getEmployeesDistinctCities = (): string[] => {
  return [];
};

//**********************************************************//
//*
//*  Goal: Sort employees unique cities in a one liner
//*
//**********************************************************//
export const sortEmployeesDistinctCities = (): string[] => {
  return [];
};

//**********************************************************//
//*
//*  Goal: Get employee full name for a specific city
//*  Expected result for New York: ['John Doe', 'Hulk Hogan'] in any order
//*
//**********************************************************//
export const getEmployeesFullNameForCity = (city: string): string[] => {
  return [];
};
