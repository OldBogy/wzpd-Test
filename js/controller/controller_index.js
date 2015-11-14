angular
	.module("sdApp", [])
	.controller(
		"myControl",
		function($scope, $http) {
			// 加载帐套
			$http
				.get("/login/login!doGetAccsetList.action")
				.success(
					function(response) {
						$scope.sampleList = response.resultData.AccsetList;
						console.log($scope.sampleList);
					});
			$scope.sampleList = [];
			$scope.user = {
				eid: "",
				accsetName: "",
				password: "",
				rem: ""
			};
			$scope.login = function() {

				$http({
					method: 'POST',
					contentType: "text/html;charset=utf8",
					params: {

						eid: $scope.user.eid,
						accsetName: $scope.user.accsetName,
						password: $scope.user.password
					},
					url: "login/home_jsontest.action?reqType=json&ISLOGIN=TRUE"
				}).success(function(response) {
					if (response.success) {
						if (response.msg == "no operator") {
							alert("错误", "操作员不存在！");
						} else if (response.msg == "operator is stoped") {
							alert("错误", "操作员已停用！");
						} else if (response.msg == "operator is cbpclient") {
							alert("错误", "操作员是客户平台操作员不能在此登陆！");
						} else if (response.msg == "password error") {
							alert("错误", "登陆密码错误，请重新输入！");
						} else {
							window.location.href = 'home!home.action';
						}
					} else {
						alert("返回为未知错误");
					}
				});

			};
		})