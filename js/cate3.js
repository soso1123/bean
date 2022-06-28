var gul = document.getElementById("gul");

function createdetails() {
	var details = document.createElement('details')
	var newSummary = document.createElement('summary');
	var text = prompt("제목을 입력해 주세요.","");
	newSummary.innerHTML = text;

	var newP = document.createElement('p');
	var text = prompt("내용을 입력해 주세요.","");
	newP.innerHTML = text;

	details.appendChild(newSummary);
	details.appendChild(newP);
	gul.appendChild(details);
}