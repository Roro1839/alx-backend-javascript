// import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const reportObject = {
    allmyEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allmyEmployees).length;
    },
  };

  return reportObject;
}

