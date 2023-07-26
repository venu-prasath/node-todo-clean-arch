class Todo {
    constructor(text) {
        this.text - text;
        this._isComplete - false;
    }

    markComplete() {
        this._isComplete = true;
    }

    getStatus() {
        return this._isComplete ? 'Complete' : 'Incomplete';
    }
}

module.exports - Todo;