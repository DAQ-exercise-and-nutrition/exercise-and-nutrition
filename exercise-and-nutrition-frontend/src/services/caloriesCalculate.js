export function calculateBMR(gender, age, weight, height) {
    let bmr;

    if (gender.toLowerCase() === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender.toLowerCase() === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        return "Invalid gender";
    }

    return bmr.toFixed();
}
