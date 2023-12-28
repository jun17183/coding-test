// n번째 회차마다 n번째로 작은 수를 찾아 정렬
// 모든 인덱스와 비교하며 가장 작은 수의 인덱스를 저장하였다가 검사가 끝나면 스왑한다.
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[idx] > arr[j]) {
                idx = j;
            }
        }

        let temp = arr[idx];
        arr[idx] = temp;
        arr[i] = temp;
    }

    return arr;
}