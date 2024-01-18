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

// Goal 1: Order employees from the highest rating to the lowest
export const sortEmployeeByRating = (): Employee[] => {
  const sortedEmployees = employees.slice().sort((a, b) => b.rating - a.rating);
  return sortedEmployees;
};

// Goal 2: Get employee with the lowest rating
export const getEmployeeWithLowestRating = (): Employee => {
  const lowestRatedEmployee = employees.reduce(
    (min, employee) => (employee.rating < min.rating ? employee : min),
    employees[0]
  );
  return lowestRatedEmployee;
};

// Goal 3: Get average rating of all employees
export const getTheAverageRatingForEmployees = (): number => {
  const totalRating = employees.reduce(
    (sum, employee) => sum + employee.rating,
    0
  );
  const averageRating = totalRating / employees.length || 0;
  return averageRating;
};

// Goal 4: Get cities starting with New
export const getEmployeesCitiesStartingWithNew = (): string[] => {
  const employeesCitiesStartingWithNew = employees
    .map((employee) => employee.cities.filter((city) => city.startsWith("New")))
    .flat();
  return employeesCitiesStartingWithNew;
};

// Goal 5: Get all unique cities from employee cities
export const getEmployeesDistinctCities = (): string[] => {
  const allCities = employees.flatMap((employee) => employee.cities);
  const uniqueCities = Array.from(new Set(allCities));
  return uniqueCities;
};

// Goal 6: Sort employees unique cities in a one liner
export const sortEmployeesDistinctCities = (): string[] =>
  Array.from(new Set(employees.flatMap((employee) => employee.cities))).sort();

// Goal 7: Get employee full name for a specific city
export const getEmployeesFullNameForCity = (city: string): string[] => {
  const employee = employees
    .filter((employee) => employee.cities.includes(city))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
  return employee;
};
