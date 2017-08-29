(function(){
    'use strict';

    angular
    .module('employeeapp')
    .controller('empController',empController);
    empController.$inject=['employeeService'];

    function empController(employeeService)
    {
        var emp=this;
        emp.employee=[];

        console.log("Controller working!!!");

            function getData()
            {
                 console.log("GETDATA working!!!");
                return employeeService.getEmployee()
                .then(function(data){
                       emp.employee=data; 
                return emp.employee;
            });
            }
    }
})();