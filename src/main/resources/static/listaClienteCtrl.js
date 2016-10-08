angular.module("vendas").controller("listaClienteCtrl", function ($scope, $http) {
	
	buscarCliente();
	
	function buscarCliente() {
		$http.get("cliente/listar").then(function(response) {
			$scope.clientes = response.data;
	    });
	}
	
	$scope.removeCliente = function (cliente) {
		$http.post("cliente/remove", cliente).success(function (resultadoDoResponse) {
			buscarCliente();
		});
	};
});
