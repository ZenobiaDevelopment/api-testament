import testament from "testament-cli";

export function handle() {
    process.on('uncaughtException', (err) => {
        testament.error(err);
    })

    process.on('unhandledRejection', (err) => {
        testament.error(err);
    })
}

let error = {
    handle
}

export default error;