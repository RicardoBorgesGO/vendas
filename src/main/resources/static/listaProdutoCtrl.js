angular.module("vendas").controller("listaProdutoCtrl", function ($scope, $http) {
	
	buscarProduto();
	
	function buscarProduto() {
		$http.get("produto/listar").then(function(response) {
			$scope.produtos = response.data;
	    });
	}
	
	$scope.removeProduto = function (produto) {
		$http.post("produto/remove", produto).success(function (resultadoDoResponse) {
			buscarProduto();
		});
	};
});
