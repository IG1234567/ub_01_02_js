document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("candidateForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const age = document.getElementById("age").value;
        const candidate = document.getElementById("candidates").value;

        // I can use these values as needed (e.g., display them, send them to the backend, etc.)
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Age:", age);
        console.log("Selected Candidate:", candidate);
    });
});
