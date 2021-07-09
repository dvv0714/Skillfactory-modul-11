const sum = require('./index.js')

test('сумма двух чисел', () => {
    expect(sum(2, 60)).toBe(62)
})

test('сложение положительных чисел не равно нулю', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(sum(a + b)).not.toBe(0)
        }
    }
})

test('5 должны быть больше чем 4', () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
})

