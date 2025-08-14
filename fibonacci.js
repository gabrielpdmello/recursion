function fibs(n) {
    let array = [];
    let n1 = 0;
    let n2;
    let n3;

    for (i = 0; i < n; i++) {
        if (i === 0) {
            array.push(n1);
            continue
        }

        if (i === 1) {
            n2 = 1;
            array.push(n2);
            continue
        }
        
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        array.push(n3);
    }

    return array
}

function fibsRec(n, array = []) {
    if (n === 1) {
        array.push(0)
        return array
    } else if (n === 2) {
        array.push(0, 1)
        return array
    } else {
        let array1 = fibsRec(n - 1, array);
        array.push(array1[array1.length - 1] + array1[array1.length - 2]);
        return array
    }
}

console.log(fibsRec(8));