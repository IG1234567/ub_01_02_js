`document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("candidateForm");
    const candidatesSelect = document.getElementById("candidates");

    // Nuskaitom kandidatų sąrašą iš candidates.json failo
    fetch("candidates.json")
        .then((response) => response.json())
        .then((data) => {
            // Pildome pasirinkimo lauką kandidatų duomenimis
            data.candidates.forEach((candidate) => {
                const option = document.createElement("option");
                option.value = candidate.id;
                option.text = candidate.name;
                candidatesSelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Nepavyko nuskaityti kandidatų duomenų:", error);
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();
        
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const age = document.getElementById("age").value;
            const selectedCandidateId = candidatesSelect.value;
        
            // veiksmai su informacija
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Age:", age);
            console.log("Selected Candidate ID:", selectedCandidateId);
            
            // Sukuriam objektą su balsu
            const vote = {
                firstName,
                lastName,
                age,
                selectedCandidateId,
            };
        
            // POST užklausą į serverį
            fetch("/register-vote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vote),
            })
                .then((response) => response.json())
                .then((data) => {
                    // veiksmas po balsavimo
                    console.log("Balsas užregistruotas:", data);
                })
                .catch((error) => {
                    console.error("Nepavyko užregistruoti balsu:", error);
                });
    });
 
`