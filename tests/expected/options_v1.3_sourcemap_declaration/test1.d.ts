declare module test1 {
    interface MyTestInterface1 {
        getProp1(): string;
    }
    class Test1 implements MyTestInterface1 {
        private prop1;
        private prop2;
        constructor();
        getProp1(): string;
        private setProp1(value);
        getProp2(): string;
        private setProp2(value);
        static factory(): Test1;
    }
}
