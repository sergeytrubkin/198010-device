var catalogBtn = document.querySelector(".header__catalog_btn");
var catalogList = document.querySelector(".header__catalog");

// catalogBtn.addEventListener("mouseover", function(event){
// 	event.preventDefault();
// 	catalogList.classList.toggle("catalog__display_block")
// })

// catalogList.addEventListener("mouseout", function(event){
// 	event.preventDefault();
// 	catalogList.classList.toggle("catalog__display_block")
// })

catalogBtn.addEventListener("click", function(event){
	event.preventDefault();
	catalogList.classList.toggle("catalog__display_block")
})