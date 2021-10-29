export class Kata {
    static highAndLow(numbers: string): string {
        let arr = numbers.split(" ");
        let max = arr[0], min = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) > parseInt(max)) {
                max = arr[i];
            }

            if (parseInt(arr[i]) < parseInt(min)) {
                min = arr[i];
            }
        }
        return `${max} ${min}`;
    }
}

console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // "42 -9"

// OTHER SOLUTIONS
export class Kata2 {
    static highAndLow(numbers: string) {
        const max = Math.max(...numbers.split(' ').map(i => +i));
        const min = Math.min(...numbers.split(' ').map(i => +i));

        return `${max} ${min}`;
    }
}

export class Kata3 {
    static highAndLow(numbers: string) {
        let arr = numbers.split(" ").map(x => parseInt(x)).sort((a, b) => a - b);
        return `${arr[arr.length - 1]} ${arr[0]}`
    }
}
