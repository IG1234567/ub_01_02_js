function ageStatus(age) {
    if (age < 18) {
        return "You are underage";
    } else {
        return "You are an adult";
    }
}

console.log(ageStatus(16)); // Example usage
