
document.addEventListener("DOMContentLoaded", function () {

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7raiK36DWvTXoQTGVKG-e-upnfeuVzw8lt9413vhEIXY1ri8Uu3BM_OQq-ukR3ytL/exec";

    const form = document.getElementById("volunteer-form");
    const message = document.getElementById("form-message");
    const submitButton = document.getElementById("submit-button");

    if (!form) {
        console.error("Volunteer form not found!");
        return;
    }

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        if (!form.reportValidity()) return;

        const formData = new FormData(form);
        const data = new URLSearchParams();

        for (const [key, value] of formData.entries()) {
            data.append(key, value);
        }

        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
        message.classList.remove("error");
        message.textContent = "";

        try {

            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                body: data
            });

            form.reset();

            message.textContent =
                "Thank you! Your registration has been submitted.";

        } catch (error) {

            message.classList.add("error");
            message.textContent =
                "Unable to submit. Please try again.";

            console.error(error);

        } finally {

            submitButton.disabled = false;
            submitButton.innerHTML = 'Submit Registration <b>→</b>';

        }

    });

});
