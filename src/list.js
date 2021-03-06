import EditPage from "../src/edit.js"

export class ListPage {
	constructor(){
		this.url = "http://193.111.63.76:3000/api/v1/Users";
		this.GetUserList();
	}
	submitButton(){
		document.querySelector("input[name=createUser]").addEventListener("click",function(){
			window.location.href = "create-page.html";
		});
		document.querySelector("img").addEventListener("click",(event)=>{
			event.preventDefault();
			console.log(event.target.parentNode.getAttribute("href"));
			if(confirm("Удалить пользователя?")){
				var id = event.target.parentNode.getAttribute("data-id");
				EditPage.prototype.DeleteUser.call(this,id);
			}
		})
	}
	GetUserList(){
		fetch(this.url, {
			method : "GET"
		}).then(function(responce){
				return responce.json();
			})
		.then(function(data){
			this.AppendData(data);
			this.submitButton();
			}.bind(this));
	}

	CreateTr(){
		this.tr = document.createElement("tr");
		return this;
	}
	CreateTd(data){
		this.td = document.createElement("td");
		this.td.innerHTML = data;
		return this;
	}

	AppendInTable(){
		document.querySelector("table").appendChild(this.tr).appendChild(this.td);
	}

	AppendData(data){
		data.forEach((item)=>{
			this.CreateTr().CreateTd(item.name).AppendInTable();
			this.CreateTd(item.email).AppendInTable();
			this.CreateTd("<a href='"+this.url+"/"+item._id+"'>"+this.url+"/"+item._id+"</a>").AppendInTable();
			this.CreateTd(item.comment).AppendInTable();
			this.CreateTd("<a href='"+this.url+"/"+item._id+"' data-id='"+item._id+"'><img src='../img/drop.png'></a>").AppendInTable();
		})
	}
}

export default function initPage() {
	new ListPage();
}