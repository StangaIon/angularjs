var myApp = angular.module('myApp', []);
var model = {
    items: [
      {id:1, purchase: "Pine", done: false, price: 15.9 },
      {id:2, purchase: "Ulei", done: false, price: 60 },
      {id:3,purchase: "Cartofi", done: true, price: 22.6 },
      {id:4, purchase: "Electrocasnice ", done: false, price:310 }
    ]
    };

    myApp.controller("ctrlTest", function ($scope) {
    $scope.list = model;
    $scope.addItem = function (text, price) {
       price = parseFloat(price); // преобразуем введенное значение к числу
       if(text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
       {
           id_list = $scope.list.items.length;
           $scope.list.items.push({ id:id_list+1,purchase: text, price: price, done: false });
       }
    }
    $scope.stergeBrone = function(id){
      let modified = [];
      angular.forEach($scope.list.items, function(item) {
          if(item.id != id){
              modified.push(item);
          }
         
      });
      
      $scope.list.items = modified;
  }
    });

    