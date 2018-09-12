function type_check_v1(arg1, arg2) {
	if(typeof arg1.valueOf() === arg2) {
		return true;
	} else {
		return false;
	}
}

function type_check_v2(arg1, arg2) {
	typeCheck = true;
    valueCheck = true;
    enumCheck = true;
    if(arg2.hasOwnProperty('type')){
        typeCheck = typeof(arg1) == arg2.type;
    }
    if(arg2.hasOwnProperty('value')){
        valueCheck = arg1 == arg2.value;
    }
    if(arg2.hasOwnProperty('enum')){
        enumCheck = arg2.enum.includes(arg1);
    }
    return typeCheck == valueCheck == enumCheck;
}


function type_check() {
	//TODO
}