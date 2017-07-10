var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  itemValue = JSON.parse(this.responseText);
  var x = document.getElementsByClassName("news-list");
	var innerToHTML = '';
	itemValue.forEach(function(element)
		{
			innerToHTML += '<li class ="item">' +
			'<div class ="inner">' +
			'<img src = "' + element.image + '">' +
			'<h3>' + element.title + '</h3>' +
			'<p>' + element.description + '</p>' +
			'<div class="arrow">' +
			'<a href="#"><img src = "../images/rightarrow.png"></a>' +
			'</div></div></li>';
		});
	x[0].innerHTML = innerToHTML;
}
};
xhttp.open("GET", "../news.json", true);
xhttp.send();
