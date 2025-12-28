
//enum type in TypeScript

import { get } from "http";

//1. String Enum

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function move(direction: Direction) {
    console.log(`Moving in direction: ${direction}`);
}

move(Direction.Right);  

//2. Numeric Enum

enum Status {
    Success = 1,
    Failure = 0,
    Pending= 2
}

function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Success:
            return "Operation was successful.";
        case Status.Failure:
            return "Operation failed.";
        case Status.Pending:
            return "Operation is pending.";
        default:
            return "Unknown status.";
    }
}

console.log(getStatusMessage(Status.Success));  // Output: Operation was successful.



// 3.const enum

const enum TestResults {
    Pass,
    Fail,
    Skip
}

function getTestResultName(result: TestResults) {
    console.log(`Test result: ${result}`);
}

getTestResultName(TestResults.Pass); // Output: Test result: 0

// 4. Heterogeneous Enum

enum BrowerSatus {
    Open,
    Incognito,
    Crashed = "CRASHED",
    Closes=5,
    Freeze
}

function getBrowserStatus(status: BrowerSatus) {
    console.log(`Browser status: ${status}`);
}

getBrowserStatus(BrowerSatus.Crashed); // Output: Browser status: CRASHED

// 5. Enum with computed and constant members

enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}

function checkFileAccess(access: FileAccess) {
    console.log(`File access level: ${access}`);
}

checkFileAccess(FileAccess.ReadWrite); // Output: File access level: 6