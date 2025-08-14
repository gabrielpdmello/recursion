function mergeSort(array) {
    if (array.length > 1) {
        let half = array.length / 2;
        let left = array.slice(0, half);
        let right = array.slice(half, array.length);
        mergeSort(left);
        mergeSort(right);

        let i = j = k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right [j]) {
                array[k] = left[i];
                i++;
            } else {
                array[k] = right[j];
                j++;
            }
            k++
        }
        
        while (i < left.length) {
            array[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            array[k] = right[j];
            j++;
            k++;
        }
    }
}

let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(array1);
console.log(array1);

let array2 = [105, 79, 100, 110];
mergeSort(array2);
console.log(array2);