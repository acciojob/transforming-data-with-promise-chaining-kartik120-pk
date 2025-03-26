//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");

    if (isNaN(inputValue)) {
        outputDiv.innerText = "Please enter a valid number.";
        return;
    }

    outputDiv.innerText = "Processing...";

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerText = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num * 2;
            outputDiv.innerText = `Result: ${result}`;
            resolve(result);
        }, 2000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num - 3;
            outputDiv.innerText = `Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num / 2;
            outputDiv.innerText = `Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            const result = num + 10;
            outputDiv.innerText = `Final Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .catch((error) => {
        outputDiv.innerText = `Error: ${error}`;
    });
});