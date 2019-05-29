// function safeCall(f) {
//     try {
//         f();
//         console.log(true);
//     } catch (error) {
//         console.log(false);
//     }
// }
//
// safeCall(() => console.log('Hello!')); // true
// safeCall(() => JSON.parse('abc')); // false
// safeCall(() => false); // true
// safeCall(() => abc); // false


Function.prototype.safeCall = function (context, ...args) {
    try {
        this(...args);
    } catch (error) {
        return null;
    }
};
