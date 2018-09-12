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
	//TODO
	prop.unshift(str);
	prop['type']['name'] = "chien";
	
}

function leet(str) {
	str = str.replace(/[aA]+/g, "4");
    str = str.replace(/[oO]+/g, "0");
    str = str.replace(/[eE]+/g, "3");
    str = str.replace(/[sS]+/g, "5");
    str = str.replace(/[tT]+/g, "7");
    str = str.replace(/[iI]+/g, "1");
    str = str.replace(/[bB]+/g, "8");
    return str;

}

function verlan(str) {
	word = str.split(" ").map(function(str) {
        return str.split("").reverse().join("");
    });
    return word.join(" ");
}

function yoda(str) {
	return str.split(" ").reverse().join(" ");
}

function vig() {

}



