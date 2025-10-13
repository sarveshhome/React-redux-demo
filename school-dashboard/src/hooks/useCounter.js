
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
        reset: () => {
            count = initialValue;
            return count;
        }
    };
}

export const useCounter = createCounter;
