	 class User{
		constructor(){
			this.id=null;
			this.nom="";
			this.prenom="";
		}

		static getinstance(ins){
			let user=new User();
			user.id=ins.id;
			user.nom=ins.nom;
			user.prenom=ins.prenom;
			return user;
		}
		vider(){

			this.id=null;
			this.nom="";
			this.prenom="";
		}
		verif(){
			if(this.nom==""||this.prenom=="") return true;
			else return false;
		}
	}
