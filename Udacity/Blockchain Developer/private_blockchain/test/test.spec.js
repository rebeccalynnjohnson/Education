const assert = require('assert');
let chai = require('chai');
var expect = chai.expect;
var Blockchain = require('../src/blockchain.js').Blockchain;
const BlockClass = require('../src/block.js');



describe('Blockchain.js', function () {
    describe('__addBlock', function () {
        it('should add block into chain', async () => {
            // Setup
            const obj = new Blockchain();
            const result = await obj._addBlock(new BlockClass.Block({owner: "Rebecca",star: {'test': 'test'}}));
            expect(result.height).to.equal(1)
        });
    });
});

describe('validatechain', function (){
    it('should be valid', async() => {
        const chain = [new BlockClass.Block({data: 'Dummy Genesis Block'}), new BlockClass.Block({data: 'Dummy Second Block'})]

        for (let item of chain) {
            if (item.height === 0) {
                await item.validate() ? true : errorLog.push("Genesis block is not valid");
            } else {
                // check if valid or not
            await item.validate() ? true : errorLog.push(item.height);
            i
            }
        }
    })

    it('should be NOT valid', async () => {
        //Dummy block make it so that the chain is in valid and 
        // the validationchain item.validate should return a false value
        const chain = [new BlockClass.Block({data: ''}), new BlockClass.Block({data: ''})]
        for (let item of chain) {
            if (item.height ===0) {
                await item.validate() ? true : errorLog.push("Genesis block is not valid");
            } else {
                // check if valid or not
                await item.validate() ? true : errorLog.push(item.height);
                i
            }
        }
    })

});