var itemValue = [
	{
		image: "../images/new-1.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-2.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-3.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-4.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-5.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-6.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-7.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-8.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	},
	{
		image: "../images/new-9.jpg",
		title: "Đau cổ vai tay",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
	}
];
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