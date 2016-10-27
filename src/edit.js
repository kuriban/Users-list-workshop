import CreatePage from "../src/create.js" ;

export default class EditPage {
	constructor(){
		this.setupButton();
	}

	/**
	 * Удаление пользователя
	 * @param id идентификатор пользователя
	 * @constructor
     */
	DeleteUser(id){
		var data = {};
		CreatePage.prototype.SendRequest.call(this,data,id);
		alert("Пользователь удален!");
		window.location.reload();
	}

}

export default function initPage() {
	new EditPage();
}