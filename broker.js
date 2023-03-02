const { ServiceBroker } = require("moleculer");

// Create a broker
const broker = new ServiceBroker();

// Create a service
broker.createService({
    name: "math",
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        },

        sub(ctx) {
            return Number(ctx.params.a) - Number(ctx.params.b);
        },

        mult: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                return Number(ctx.params.a) * Number(ctx.params.b);
            }
        },

        div: {
            params: {
                a: { type: "number", convert: true },
                b: { type: "number", notEqual: 0, convert: true }
            },
            handler(ctx) {
                let a = Number(ctx.params.a);
                let b = Number(ctx.params.b);
                return a / b;
            }
        }
    }
});

// Start broker
broker.start()
    // Call service
    .then(() => {
        return broker
            .call("math.add", { a: 5, b: 3 })
            .then(res => broker.logger.info("  5 + 3 =", res));
    })
    .then(() => {
        return broker
            .call("math.sub", { a: 9, b: 2 })
            .then(res => broker.logger.info("  9 - 2 =", res));
    })
    .then(() => {
        return broker
            .call("math.mult", { a: 3, b: 4 })
            .then(res => broker.logger.info("  3 * 4 =", res));
    })
    .then(() => {
        return broker
            .call("math.div", { a: 8, b: 4 })
            .then(res => broker.logger.info("  8 / 4 =", res));
    })
    .then(() => {
        // Divide by zero! Throw error...
        return broker
            .call("math.div", { a: 6, b: 2 })
            .then(res => broker.logger.info("  6 / 2 =", res));
    })
    .catch(err => console.error(`Error occurred! ${err.message}`));