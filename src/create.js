export default class CreatePage {
	constructor(){
		this.submitButton();
	}

	/**
	 * Установка события отправки формы, Отмена отправки формы по умолчанию
	 */
	submitButton(){
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
	 * Отправка запроса
	 * @param data данные для запроса ввиде объекта
	 * @param parametr_request параметр строки URL запроса
	 * @param return_data возвращать ли результат запроса
	 * @param callback возвращает результат
	 * @constructor
     */
	SendRequest(data,parametr_request,return_data,callback){
		var responce = "";
		var myHeaders = new Headers(); // создаём объект заголовков
		myHeaders.append("Content-Type", "application/json");   /// добавляем заголовок Content-Type чтоб сказать серверу в каком формате данные передаём
		var myInit = {
			method: 'POST', // указываем метод запроса
			headers: myHeaders,  // добавляем заголовки
			mode: 'cors',   // ставим режим кросс доменных запросов
			cache: 'default', // кеширование по умолчанию
			body: JSON.stringify(data)
		};
		var myRequest = new Request(this.url+"/"+parametr_request, myInit); // создаём запрос
		fetch(myRequest)   //говорим запросу выполнится
				.then(function(response) {
					return response.json(); /// парсим ответ от сервера в json
				})
				.then(function(json) {
					if (return_data) {
						callback(json);
					}else{
						window.location.href = "list-page.html";
					}
				});
		if(return_data)
			return responce;
	}

	/**
	 * Вывод данных в таблицу
	 * @constructor
     */
	GetDataForm(){
		this.name = document.querySelector("input[name=name]").value;
		this.pw = document.querySelector("input[name=pw]").value;
		this.pw2 = document.querySelector("input[name=pw2]").value;
		this.email = document.querySelector("input[name=email]").value;
		this.comment = document.querySelector("input[name=comment]").value;
		this.url = document.querySelector("#form").getAttribute("action");
	}


}

export default function initPage() {
	new CreatePage();
}
