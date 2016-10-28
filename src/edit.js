import CreatePage from "../src/create.js";

export default class EditPage {
	constructor(){
		this.setupButton();
		this.DecodeUrl();
		this.SetDataForm();
	}

	DecodeUrl(){
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		this.name = vars.name;
		this.name = vars.email;
		this.name = vars.comment;
	}

	setupButton(){
		document.querySelector("#form").addEventListener("submit",(event)=>{
			event.preventDefault();
			this.GetDataForm();
			if( this.pw && this.pw != this.pw2 ){
				alert("Пароли не совпадают");
				event.preventDefault();
			}
			var data = {   /// добавляем данные к запросу
				name: this.name,
				password: this.pw,
				email: this.email,
				comment: this.comment
			};
			this.SendRequest(data,"");
		})
	}

	/**
	 * Задание полученныз данных пользователя
	 * @constructor
	 */
	SetDataForm(){
		document.querySelector("input[name=name]").value = this.name;
		document.querySelector("input[name=email]").value = this.email;
		document.querySelector("input[name=comment]").value = this.comment;
	}

	/**
	 * Удаление пользователя
	 * @param id идентификатор пользователя
	 * @constructor
     */
	DeleteUser(id,callback){
		var data = {};
		CreatePage.prototype.SendRequest.call(this,data,id);
		alert("Пользователь удален!");
		if(callback){
			callback();
		}
	}
}

export default function initPage() {
	new EditPage();
}