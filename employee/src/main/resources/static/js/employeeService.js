(function()
{
    'use strict';

    angular
    .module('employeeapp')
    .factory("employeeService",employeeService)
    employeeService.$inject=["$http"];

    function employeeService($http)
    {

        var employeeService= {
            getEmployee: getEmployee
        };

        return employeeService;
    
    function getEmployee()
    {
        console.log("Service working!!!");
         return $http.get("http://localhost:8080/#/getemployee")
        .then(getEmployeeDetails);
        function getEmployeeDetails(response)
        {
            return response.data;
        };
    }
    };   
})();