function Logger(name, before, after, comments = '') {
    this.name = name;
    this.before = before;
    this.after = after;
    this.comments = comments;
}

Logger.prototype.showInfo = function () {
    console.log(`${this.name} starts at ${this.before
        .toString()
        .substring(8, 13)} ends at ${this.before
            .toString()
            .substring(8, 13)}; time passed: ${this.after - this.before}; ${this.comments}`);
}

export {
    Logger
};