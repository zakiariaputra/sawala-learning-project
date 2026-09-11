// Kalkulator sederhana - pakai function & kondisi (if/else / switch)

function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
        case "-":
            return angka1 - angka2;
        case "*":
            return angka1 * angka2;
        case "/":
            if (angka2 === 0) {
                return "Error: tidak bisa dibagi dengan 0";
            }
            return angka1 / angka2;
        default:
            return "Operator tidak valid";
    }
}

// ==== PENGGUNAAN ====
console.log(kalkulator(10, 5, "+"));  // 15
console.log(kalkulator(10, 5, "-"));  // 5
console.log(kalkulator(10, 5, "*"));  // 50
console.log(kalkulator(10, 5, "/"));  // 2
console.log(kalkulator(10, 0, "/"));  // Error: tidak bisa dibagi dengan 0
console.log(kalkulator(10, 5, "%"));  // Operator tidak valid
