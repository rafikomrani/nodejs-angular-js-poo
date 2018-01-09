app.controller('profil',function($scope, $routeParams,$http) {
  $scope.id = $routeParams.id;
$http.get("http://localhost:3000/infouser/"+$scope.id).then(function(response){
$scope.user=response.data.user[0];
});
  
});
	app.controller("ctr",function($scope,$http) {
		$scope.user=new User();
         $scope.index=null;
		$scope.load=function(){
	 $http.get("http://localhost:3000/getallusers").then(function(response){
     $scope.users=response.data.a;
	 });
	 };
	 $scope.affect=function(index){
	 	$scope.index=index;
	 	$scope.user=User.getinstance($scope.users[index]);
	 }
	 $scope.post=function(){
	 	if($scope.user.verif()) return alert('veuillez inserer tous les infomrmation ');
	 	let user=$scope.user;
      $http({method: 'POST', url:'http://localhost:3000/saveuser', data:{user}, headers: {'Content-Type': 'application/json'}}).then(function(response){
        $scope.users.push(response.data.user);
        $scope.user.vider();
      });
	 };
	 $scope.new=function(){
	 	$scope.index=null;
	 	$scope.user=new User();
	 }
	 $scope.delete=function(){
	 	if (confirm("voulez vous vraiment supprimer ce personne?")) {
      let user=User.getinstance($scope.users[$scope.index]);
      $http.get('http://localhost:3000/delete/'+user.id).then(function(response){
     if(response.data=="ok"){
     	$scope.users.splice($scope.index,1);
     	$scope.new();
     }
      });
      }
	 }
	 $scope.modifier=function(){
    if($scope.user.verif()) return alert('veuillez compléte tous les informations');
	 	$http.post('http://localhost:3000/updateuser',$scope.user).then(function(response){

       $scope.users[$scope.index]=response.data.user;
       $scope.new();
	 	})
	 	
	 }
	});
	