function showSignin() {

	$("#signin").removeClass('hidden');
	$("#registration").addClass("hidden");
}

function showRegistration() {

	$("#signin").toggleClass("hidden");
	$("#registration").toggleClass("hidden");
}

function showAccount() {

	$("#signin").addClass("hidden");
	$("#registration").addClass("hidden");
	$("#account").removeClass("hidden");
}