String.prototype.ucfirst =  function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.capitalize = function () {
    self = this;
    words = this.split(" ").map(function(self) {
        return self.ucfirst();
    });
    return words.join(" ");
}

String.prototype.camelCase = function () {
    self = this;
    words = this.split(" ").map(function(self) {
        return self.ucfirst();
    });
    return words.join("");
}

String.prototype.snake_case = function () {
    self = this;
    words = this.split(" ").map(function(self) {
        return self.toLowerCase();
    });
    return words.join("-");
}


String.prototype.leet = function () {
    self = this.replace(/[aA]+/g, "4");
    self = self.replace(/[oO]+/g, "0");
    self = self.replace(/[eE]+/g, "3");
    self = self.replace(/[sS]+/g, "5");
    self = self.replace(/[tT]+/g, "7");
    self = self.replace(/[iI]+/g, "1");
    self = self.replace(/[bB]+/g, "8");
    return self;
}

String.prototype.verlan = function () {
    self = this;
    words = this.split(" ").map(function(self) {
        return self
            .split("")
            .reverse()
            .join("");
    });
    return words.join(" ");
}

String.prototype.yoda = function () {
    return this
        .split(" ")
        .reverse()
        .join(" ");
}