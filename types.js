var cool = true;
var cool2 = 'true';
// array
var pets = ['cat', 'dog'];
var pets2 = ['cat', 'dog'];
var meh = undefined;
var meh2 = null;
var obj = {};
// Tuple
var basket;
basket = ['asdf', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any !!!!!!!!!!!
var whatever = 'asdfasdf';
// void
var func = function () {
    console.log('asdf');
    // return 'asdf'
};
var func2 = function () {
    console.log('asdf');
    return 'asdf';
};
