import testament from 'testament-cli';

export function listen(app, PORT) {
    app.listen(PORT, () => {
        testament.animateSuccess('Listening on port ' + PORT);
    })

    app.on("error", (err) => {
        testament.animateFail('Something went wrong.');
    })
}

let web = {
    listen
}

export default web;