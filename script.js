// Accessing the document
const $ = document;

// Selecting the necessary elements
const wrapper = $.querySelector(".wrapper");
const input = $.querySelector("input");
const button = $.querySelector("button");
const img = $.querySelector("img");

// Adding event listener to the button
button.addEventListener("click", () => {
    let inputValue = input.value.trim();

    // Checking if input value exists
    if (inputValue) {
        button.innerHTML = "Generating QR Code...";

        // Setting the source of the image to the generated QR code
        img.setAttribute(
            "src",
            `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
        );

        // Listening to the load event of the image
        img.addEventListener("load", () => {
            // Adding the 'active' class to the wrapper and changing the button text back
            wrapper.classList.add("active");
            button.innerHTML = "Generate QR Code";
        });
    }
});

// Adding event listener to the input field
input.addEventListener("keyup", () => {
    if (!input.value.trim()) {
        wrapper.classList.remove("active");
    }
});
