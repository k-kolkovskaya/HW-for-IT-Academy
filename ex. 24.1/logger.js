function Logger(name, before, after, comments = '') {
  this.name = name;
  this.before = before;
  this.after = after;
  this.comments = comments;
}

Logger.prototype.logInfo = function() {
  console.log(
    `${this.name} begin: ${this.before
      .toString()
      .substring(8, 13)} end: ${this.after.toString().substring(8, 13)}; difference: ${this.after -
      this.before}; ${this.comments}`
  );
};

export { Logger };
