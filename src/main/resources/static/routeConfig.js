angular.module("vendas").config(function ($routeProvider) {
	$routeProvider.when("/produto", {
		templateUrl: "produto.html",
		controller: "produtoCtrl"
	});
	$routeProvider.when("/lista_produto", {
		templateUrl: "lista_produto.html",
		controller: "listaProdutoCtrl"
	});
	$routeProvider.when("/cliente", {
		templateUrl: "cliente.html",
		controller: "clienteCtrl"
	});
	$routeProvider.when("/lista_cliente", {
		templateUrl: "lista_cliente.html",
		controller: "listaClienteCtrl"
	});
	$routeProvider.otherwise({redirectTo: "/produto"});
});