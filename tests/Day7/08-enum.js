"use strict";
//enum type in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//1. String Enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving in direction: ".concat(direction));
}
move(Direction.Right);
//2. Numeric Enum
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Failure"] = 0] = "Failure";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
function getStatusMessage(status) {
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
console.log(getStatusMessage(Status.Success)); // Output: Operation was successful.
function getTestResultName(result) {
    console.log("Test result: ".concat(result));
}
getTestResultName(0 /* TestResults.Pass */); // Output: Test result: 0
