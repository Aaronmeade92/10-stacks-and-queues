const Stack = require('../stacks/stack.js');

describe('stack', () => {

    it('should push onto an empty stack', () => {

        let stack1 = new Stack();
        stack.push(1);
        expect(stack.top.vaule).toEqual(1);
    })
})