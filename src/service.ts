import { DependencyA, DependencyB } from "./dependencies";

export class ServiceA {
    protected depA: DependencyA;
    protected depB: DependencyB;

    constructor(
    ) {
        this.depA = new DependencyA();
        this.depB = new DependencyB();
    }

    public getAllNames(): string[] {
        return [this.depA.getName(), this.depB.getName()];
    }
}