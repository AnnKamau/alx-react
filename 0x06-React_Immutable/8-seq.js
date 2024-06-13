// 8-seq.js
import { Seq } from 'immutable';

// Helper function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function to print the best students
export function printBestStudents(grades) {
    const bestStudents = Seq(grades)
        .filter(student => student.score >= 70)
        .map(student => ({
            ...student,
            firstName: capitalize(student.firstName),
            lastName: capitalize(student.lastName)
        }))
        .toObject();

    console.log(bestStudents);
}
