function signon(user) {

	var userName = user.firstName + " " + user.lastName;
	var signoutButton = "<a href='#main-header' onclick='logout()'>(sign out)</a>";
	$("#head_signed_in").html("Signed in as " + userName + " " + signoutButton);
	$("#head_signed_in").removeClass('hidden');

	//change header options
	$("#head_account").removeClass('hidden');
	$("#head_signin").addClass("hidden");

	//hide the login/registration screens
	$("#signin").addClass('hidden');
	$("#registration").addClass('hidden');


}

function logout() {

	$("#head_signed_in").addClass("hidden");
	$("#head_account").addClass('hidden');
	$("#head_signin").removeClass("hidden");
}