function showSignin() {

	$("#signin").removeClass('hidden');
	$("#account").addClass("hidden");
}

function showRegistration() {

	$("#signin").toggleClass("hidden");
	$("#account").toggleClass("hidden");
}