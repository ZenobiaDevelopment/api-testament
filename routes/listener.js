import testament from "testament-cli";
import EventEmitter from 'events';

class Listener extends EventEmitter {
    listen(app, PORT) {
        app.listen(PORT, () => {
            this.emit('ready')
        })

        app.on("error", (err) => {
            testament.animateFail('Something went wrong.');
        })
    }
}



export default Listener;
