angular.module("main-app", [])
	.controller("mainNavBarCollor", function($scope) {
		$scope.items = [{
			code:"cgxt",
			name: "采购系统",
			show:false,
			leaf: [{
				code:"cgdd",
				leafname:"采购订单"
			}, {
				code:"cgkd",
				leafname:"采购开单"
			}]
		}, {
			code:"xsxt",
			name: "销售系统",
			show:true,
			leaf: [{
				code:"xsdd",
				leafname:"销售订单"
			}, {
				code:"xskd",
				leafname:"销售开单"
			}]
		}, {
			code:"kcxt",
			name: "库存系统",
			show:true,
			leaf: [{
				code:"gjrk",
				leafname:"估价入库"
			}, {
				code:"gjth",
				leafname:"估价退货"
			}]
		}];
		$scope.tClick=function($code){			
			$scope.items[$code.$index].show = !$scope.items[$code.$index].show;				
		}
		$scope.lClick=function($code){
			console.log($code.o.code);
		}
	})