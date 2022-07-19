document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 25) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => navList.classList.remove("show"))
	);

	window.addEventListener("scroll", addShadow);
});

//NAVBAR ACTIVE COLOR

navbar = document.querySelector(".navbar-nav").querySelectorAll(".nav-link");
console.log(navbar);
navbar.forEach((element) => {
	element.addEventListener("click", function () {
		navbar.forEach((nav) => nav.classList.remove("active"));
		this.classList.add("active");
	});
});
//FOOTER//
const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

