const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log(`Data Received`);
});

customEmitter.on('response', (name, id) => {
    console.log(`Data: ${name} and age: ${id}`);
});

customEmitter.emit('response', 'alice', 34);

// Order matters, first listen for event then emit 
// After emit listening to event won't do anything
customEmitter.on('response', () => {
    console.log(`Data Received`);
});