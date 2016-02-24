function ArgumenException(sMessage) {
    this.name = "ArgumenException";
    this.message = sMessage;
    this.stack = (new Error()).stack;
}

ArgumenException.extends(Error);