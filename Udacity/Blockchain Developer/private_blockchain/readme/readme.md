# Update third submission V3
I've made two changes to the code based on the V2 code review.
1. I moved the try catch block in my `validateChain()`function in `blockchain.js` inside of my `for`loop.  Additonally I've swapped out the `print(e)` function in line 249 for a an `errorLog.push(item.height)` as indicated in my code review. Finally I also refactored the output to use `resolve`.
2. I've also replaced the `if else ` portion of my `validate()` function in `block.js` with `resolve(auxiliaryHash == hashBlock)` as suggested in my last code review.

I've tested with postman an my enpoints are working as previously. As such I haven't updated the screenshots below.

I considered refactoring `getBData()` in `block.js` to returning the output without using a promise, but since I'm a bit behind in the course and the code is working as is I thought it more productive to continue with the ethereum course content.

# Update second submission V2

I've added a try / catch block to handle the `validateChain()` function in `blockchain.js`.
I also added a couple of additional tests which I used to better understand problem.
I didn't update the screenshots below as the postman calls still have the same results.

# Star registry documentation V1

I've added the following screenshots to the readme folder to document my testing process. I think all the project requirements have been fulfilled.

1. [GET_Genesis_Block](readme/GET_Genesis_Block.png)
2. [POST_Request_Validation](readme/POST_Request_Validation.png)
3. [Sign_Message](readme/Sign_Message.png)
4. [Submit_Star](readme/Submit_Star.png)
5. [GET_Stars_Owned_By_Address](readme/GET_Stars_Owned_By_Address.png)

I added also added the [Node_Stack_Trace](readme/Node_Stack_Trace.png) because I figured it might be useful for understanding what was happening in my terminal when I was making the get and post requests outlined above.

Additionally I have written a test in mocha for my `__addBlock` function and also added the Istanbul framework for coverage analysis.