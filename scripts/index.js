const calculateSummationOfUniqueBetweenTwoSets_firstAlgorithm = (arr1, arr2) => {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        var isDuplicate = false;
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
            isDuplicate = true;
            break;
            }
        }
        if (!isDuplicate) {
            sum += arr1[i];
            isDuplicate = false
        }
    }

    for (i = 0; i < arr2.length; i++) {
        isDuplicate = false;
        for (j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            sum += arr2[j];
            isDuplicate = false
        }
    }
    console.log(`Summation of unique numbers between two sets (using arrays) = ${sum}`);
}

const calculateSummationOfUniqueBetweenTwoSets_secondAlgorithm = (arr1, arr2) => {
    var sum = 0;
    var map = {};
    for (var i = 0; i < arr1.length; i++) {
        if (map[arr1[i]]) {
            map[arr1[i]]++;
        } else {
            map[arr1[i]] = 1;
        }
    }

    for (i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            map[arr2[i]]++;
        } else {
            map[arr2[i]] = 1;
        }
    }

    for (const [key, value] of Object.entries(map)) {
        if (value === 1) {
            sum += parseInt(key);
        }
    }
    console.log(`Summation of unique numbers between two sets (using map) = ${sum}`);
}

const calculateSummationOfDuplicateBetweenTwoSets_firstAlgorithm = (arr1, arr2) => {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        var isUnique = true;
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                isUnique = false;
                break;
            }
        }
        if (!isUnique) {
            sum += arr1[i];
            isUnique = true;
        }
    }

    for (var i = 0; i < arr2.length; i++) {
        isUnique = true;
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                isUnique = false;
                break;
            }
        }
        if (!isUnique) {
            sum += arr2[i];
            isUnique = true;
        }
    }
    console.log(`Summation of duplicate numbers between two sets (using arrays) = ${sum}`);
}

const calculateSummationOfDuplicateBetweenTwoSets_secondAlgorithm = (arr1, arr2) => {
    var sum = 0;
    var map = {};
    for (var i = 0; i < arr1.length; i++) {
        if (map[arr1[i]]) {
            map[arr1[i]]++;
        } else {
            map[arr1[i]] = 1;
        }
    }

    for (i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            map[arr2[i]]++;
        } else {
            map[arr2[i]] = 1;
        }
    }

    for (const [key, value] of Object.entries(map)) {
        if (value > 1) {
            sum += parseInt(key * value);
        }
    }
    console.log(`Summation of duplicate numbers between two sets (using map) = ${sum}`);
}


const arr1 = [3, 1, 7, 9];
const arr2 = [2, 4, 9, 1, 3];

calculateSummationOfUniqueBetweenTwoSets_firstAlgorithm(arr1, arr2);
calculateSummationOfUniqueBetweenTwoSets_secondAlgorithm(arr1, arr2);

const arr3 = [12, 13, 6, 10];
const arr4 = [13, 10, 16, 15];

calculateSummationOfDuplicateBetweenTwoSets_firstAlgorithm(arr3, arr4);
calculateSummationOfDuplicateBetweenTwoSets_secondAlgorithm(arr3, arr4);