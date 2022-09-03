# node-stuffs
Repository to centralize and evolve the nodejs skills


## The event loop example
```javascript
// node myFile.js
const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// new timers, tasks, operations are recorded from myFile running
myFile.runContents()

function shouldContinue(){
    // Check one: Any pending setTimeout, setInterval, setImmediate?
    // Check two: Any pending OS tasks? (like server listening to port)
    // Check three: Any pending long running operations? (like fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one 'tick'
while(shouldContinue()){
    // 1) Node looks at pendingTimers and sees if any functions are read to be called. setTimeout, setInterval
    // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
    
    // 3) Pause execution. Continue when...
    //      - a new pendingOSTask is done
    //      - a new pendingOperation is done
    //      - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate
    // 5) Handle any 'close' events
}

// Go back to terminal
```

## Routes
* [interview test] (https://github.com/MRCardoso/node-stuffs/blob/main/interview/README.md)
* [event loop] (https://github.com/MRCardoso/node-stuffs/blob/main/eventLoop/README.md)
* [Cluster] (https://github.com/MRCardoso/node-stuffs/blob/main/clusters/README.md)