function Solve(val) {
	let v = document.getElementById("res");
	v.value += val;
}

function Result() {
	let output = eval(document.getElementById("res").value);

	document.getElementById("res").value = output;
}
function Clear() {
	// let input = document.getElementById("res");
	// input.value = "";

	let input = (document.getElementById("res").value = "");
}
function Back() {
	let remove = document.getElementById("res");
	remove.value = remove.value.slice(0, -1);
}
