// 인덱스 1부터 자기 앞의 인덱스와 비교하여 자기보다 큰 수를 만나면 스왑하고 작은 수를 만나면 루프를 멈추고 다음 회차로 넘어가는 정렬
// 앞에서부터 정렬하여 그 수를 알맞은 위치에 삽입하는 느낌이다.
// 작은 수를 만나면 루프를 멈추기에 선택 정렬, 버블 정렬과 같은 n^2의 시간 복잡도를 가짐에도 효율이 약간 더 좋은 편이다.
function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] >= arr[j - 1]) break;

            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }

    return arr;
}
