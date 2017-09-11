

export default function(store, next, action) {
    console.log("Logging: "+ action);
    return next(action);
}