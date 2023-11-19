console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
    basket.push(item);
    return true;
}
addItem('apples');
addItem('banana');
addItem('juice');
console.log(basket);
function listItems() {
    for (let index = 0; index < basket.length; index++) {
        console.log(basket[index]);
    }
}
listItems();
console.log(basket);
function empty() {
basket.length = 0;
}
empty();
console.log(basket);

try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}