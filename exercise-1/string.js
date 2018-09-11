function ucfirst(str) {
	if (str.length > 0) {
    	return str[0].toUpperCase() + str.substring(1);
    } else {
    return str;
  } 
}

function capitalize(str) {
	tab = str.split(" ");
	for (var m in tab) {
		tab[m] = tab[m].substr(0, 1).toUpperCase()+tab[m].substr(1, tab[m].length);
	}
	str = tab.join(" ");
	return str;
}

function camelCase() {

}

function snake_case() {
	
}

function prop_access() {
	
}

function leet() {

}

function verlan() {

}

function yoda() {

}

function vig() {

}

console.log(capitalize("hello world"));