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

function camelCase(str) {
	str = capitalize(str);
	str = str.replace(/ /g, '');

	return str;
}

function snake_case(str) {
	str = str.toLowerCase();
	str = str.replace(/ /g, '-');

	return str;
}

function prop_access(str, prop = {}) {
	prop.unshift(str);
	prop['type']['name'] = "chien";
	
}

function leet(str) {
	let res = "";

	if (str.indexOf('a') > -1) {
	  	res = str.replace(/a/g, "4");
	}
	if (str.indexOf('e') > -1) {
	  	res = str.replace(/e/g, "3");
	}
	if (str.indexOf('i') > -1) {
	  	res = str.replace(/i/g, "1");
	}
	if (str.indexOf('o') > -1) {
	  	res = str.replace(/o/g, "o");
	}
	if (str.indexOf('u') > -1) {
	  	res = str.replace(/u/g, "_");
	}
	if (str.indexOf('y') > -1) {
	  	res = str.replace(/y/g, "7")
	}

	return res;

}

function verlan(str) {
	return str.split("").reverse().join("");
}

function yoda(str) {
	return str.reverse().join("");
}

function vig() {

}

console.log(yoda("Hello World"));




