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

//FORM
const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const surnameInput = document.querySelector("input[name='surname']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
surnameInput.isValid = () => !!surnameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, surnameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
	const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im;
	return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
	console.log("we are here");
	if (!shouldValidate) return;

	isFormValid = true;
	inputFields.forEach((input) => {
		input.classList.remove("invalid");
		input.nextElementSibling.classList.add("hide");

		if (!input.isValid()) {
			input.classList.add("invalid");
			isFormValid = false;
			input.nextElementSibling.classList.remove("hide");
		}
	});
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	shouldValidate = true;
	validateInputs();
	if (isFormValid) {
		// TODO: DO AJAX REQUEST
	}
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));



//FOOTER//
const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
