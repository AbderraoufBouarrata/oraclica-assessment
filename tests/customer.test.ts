import {
  sortEmployeeByRating,
  getEmployeeWithLowestRating,
  getTheAverageRatingForEmployees,
  getEmployeesCitiesStartingWithNew,
  getEmployeesDistinctCities,
  sortEmployeesDistinctCities,
  getEmployeesFullNameForCity,
} from "../src/challenges/3";

// DO NOT MODIFY FILE
describe("Employee tests", () => {
  test("Sort employee by rating, from highest to lowest", () => {
    const employees = sortEmployeeByRating();

    expect(employees[0].id).toEqual(5);
    expect(employees[1].id).toEqual(1);
    expect(employees[2].id).toEqual(3);
    expect(employees[3].id).toEqual(2);
    expect(employees[4].id).toEqual(4);
  });

  test("Get employee with the lowest rating", () => {
    const employee = getEmployeeWithLowestRating();
    expect(employee.id).toEqual(4);
  });

  test("Get employee average rating", () => {
    const averageRating = getTheAverageRatingForEmployees();
    expect(averageRating).toEqual(3);
  });

  test("Get employee cities starting with New", () => {
    const cities = getEmployeesCitiesStartingWithNew();

    expect(cities.includes("New York")).toBeTruthy();
    expect(cities.includes("New Jersey")).toBeTruthy();
    expect(cities.includes("New Hampshire")).toBeTruthy();
    expect(cities.includes("Chicago")).toBeFalsy();
    expect(cities.includes("Virginia")).toBeFalsy();
    expect(cities.includes("Phoenix")).toBeFalsy();
    expect(cities.includes("Boston")).toBeFalsy();
  });

  test("Get employee distinct cities", () => {
    const cities = getEmployeesDistinctCities();

    expect(cities.filter((c) => c === "New York").length).toEqual(1);
    expect(cities.filter((c) => c === "New Jersey").length).toEqual(1);
    expect(cities.filter((c) => c === "New Hampshire").length).toEqual(1);
    expect(cities.filter((c) => c === "Chicago").length).toEqual(1);
    expect(cities.filter((c) => c === "Virginia").length).toEqual(1);
    expect(cities.filter((c) => c === "Phoenix").length).toEqual(1);
    expect(cities.filter((c) => c === "Boston").length).toEqual(1);
    expect(cities.length).toEqual(7);
  });

  test("Sort employee distinct cities ascending", () => {
    const cities = sortEmployeesDistinctCities();

    expect(cities[0]).toEqual("Boston");
    expect(cities[1]).toEqual("Chicago");
    expect(cities[2]).toEqual("New Hampshire");
    expect(cities[3]).toEqual("New Jersey");
    expect(cities[4]).toEqual("New York");
    expect(cities[5]).toEqual("Phoenix");
    expect(cities[6]).toEqual("Virginia");
    expect(cities.length).toEqual(7);
  });

  test("Group employees by city", () => {
    const nyEmployees = getEmployeesFullNameForCity("New York");
    const njEmployees = getEmployeesFullNameForCity("New Jersey");
    const nhEmployees = getEmployeesFullNameForCity("New Hampshire");
    const bostonEmployees = getEmployeesFullNameForCity("Boston");
    const chicagoEmployees = getEmployeesFullNameForCity("Chicago");
    const phoenixEmployees = getEmployeesFullNameForCity("Phoenix");
    const virginiaEmployees = getEmployeesFullNameForCity("Virginia");

    // New York
    expect(nyEmployees.length).toEqual(2);
    expect(nyEmployees.includes("John Doe")).toBeTruthy();
    expect(nyEmployees.includes("Hulk Hogan")).toBeTruthy();

    // New Jersey
    expect(njEmployees.length).toEqual(2);
    expect(njEmployees.includes("John Doe")).toBeTruthy();
    expect(njEmployees.includes("Jane Doe")).toBeTruthy();

    // New Hampshire
    expect(nhEmployees.length).toEqual(1);
    expect(nhEmployees[0]).toEqual("Ricky Bobby");

    // Boston
    expect(bostonEmployees.length).toEqual(1);
    expect(bostonEmployees[0]).toEqual("Hulk Hogan");

    // Chicago
    expect(chicagoEmployees.length).toEqual(2);
    expect(chicagoEmployees.includes("John Doe")).toBeTruthy();
    expect(chicagoEmployees.includes("Rick Flair")).toBeTruthy();

    // Phoenix
    expect(phoenixEmployees.length).toEqual(1);
    expect(phoenixEmployees[0]).toEqual("Rick Flair");

    // Phoenix
    expect(virginiaEmployees.length).toEqual(1);
    expect(virginiaEmployees[0]).toEqual("Jane Doe");
  });
});
