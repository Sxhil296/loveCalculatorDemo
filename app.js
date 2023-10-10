// Define an array of possible love scores
const loveScores = [
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%"
];

// Function to calculate a random love score
function calculateLoveScore() {
    // Get the names from the input fields
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    // Ensure both names are provided
    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    // Calculate a random love score
    // const randomIndex = Math.floor(Math.random() * loveScores.length);
    // const loveScore = loveScores[randomIndex];
    const loveScore = Math.floor((Math.random() *100) +1) //without using the loveScores array

    // Display the result
    document.getElementById("result").textContent = `Love Score for ${name1} and ${name2}: ${loveScore} %`;
}

// Attach the calculateLoveScore function to the button click event
document.getElementById("calculateBtn").addEventListener("click", calculateLoveScore);
