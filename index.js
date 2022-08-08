function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("I am returning a named function.");
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("This is an anonymous function");
}