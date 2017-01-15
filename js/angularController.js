myApp.controller("myCtrl", function ($scope) {
    $scope.itemList = [
        {
            name:"Find new job",
            number: 1
        },
        {
            name: "Be happe",
            number: 2
        },
        {
            name: "Increase skills",
            number: 3
        },
    ];
    $scope.addItem = function () {
        var listLenght = $scope.itemList.length + 1;
        $scope.itemList.push({name: $scope.addName, number: listLenght});
    };
    $scope.removeItem = function (item) {
        $scope.itemList.splice(item, 1);
    };
    $scope.sortFuhc = function (sortIt) {
        $scope.myOrderBy = sortIt;
    }
});