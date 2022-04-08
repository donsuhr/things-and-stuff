const steps = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 0,
] as const;
type LetterMap = { [K in typeof steps[number]]: string };

const RomanNumerals = {
    toRoman: (x: number) => {
        const letters: LetterMap = {
            1000: 'M',
            900: 'CM',
            500: 'D',
            400: 'CD',
            100: 'C',
            90: 'XC',
            50: 'L',
            40: 'XL',
            10: 'X',
            9: 'IX',
            5: 'V',
            4: 'IV',
            1: 'I',
            0: '',
        };
        let rest = x;
        let ret = '';

        let step = 0;
        while (rest > 0 && step < steps.length) {
            const thisStep = steps[step];
            while (rest >= thisStep) {
                rest -= thisStep;
                ret += letters[thisStep];
            }
            step++;
        }
        return ret;
    },
};

export default RomanNumerals;
