class Logger {
    constructor(strategy){
        this.strategy = strategy
    }

    warn(msg) {
        this.strategy.write(msg);
    }

    info(msg) {
        this.strategy.write(msg);
    }

    error(msg) {
        this.strategy.write(msg);
    }
}


export { Logger }