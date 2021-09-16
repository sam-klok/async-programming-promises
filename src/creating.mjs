import setText, { appendText } from "./results.mjs";

export function timeout(){
    const wait = new Promise((resolve)=> {
        setTimeout(() => {
            resolve("Timeout.");
        }, 1000);
    });

    wait.then(text=>setText(text));
}

export function interval(){
    let counter = 0;
    const wait = new Promise((resolve)=> {
        setInterval(() => {
            console.log(`Timeout ${++counter}`);
            resolve(`Timeout ${counter}`);
        }, 1000);
    });

    wait.then(text=>setText(text))
    .finally(()=> appendText(` -- Done ${counter}`));
}

// TODO: finish up
export function clearIntervalChain(){
    let counter = 0;
    const wait = new Promise((resolve)=> {
        setInterval(() => {
            console.log(` Timeout ${++counter} `);
            resolve(` Timeout ${counter} `);
        }, 1000);
    });

    wait.then(text=>setText(text))
    .finally(()=> appendText(` -- Done ${counter}`));
}

export function xhr(){
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}