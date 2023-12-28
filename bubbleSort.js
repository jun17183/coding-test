// 매 회차마다 i와 i+1을 비교하여 큰 수를 뒤로 보내어 가장 큰 수부터 뒤로 보내는 정렬
function bubbleSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
