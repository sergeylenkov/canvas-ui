export type ObserverDelegate = () => void;

export class Observer<T> {
    private _value: T;
    private _observers = Array<ObserverDelegate>();

    constructor(value: T) {
        this._value = value;
    }

    public get value(): T {
        return this._value;
    }

    public set value(newValue: T) {
        this._value = newValue;

        this._observers.forEach((delegate: ObserverDelegate) => delegate())
    }

    public set delegate(delegate: ObserverDelegate) {
        this._observers.push(delegate);
    }
}