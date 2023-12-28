// n번째 회차마다 n번째로 작은 수를 찾아 정렬
// 모든 인덱스와 비교하며 가장 작은 수의 인덱스를 저장하였다가 검사가 끝나면 스왑한다.
// 시간 복잡도는 n^2로 비효율적인 정렬 방법이다.
// 또한 같은 n^2 정렬인 버블 정렬, 삽입 정렬과 다르게 불안정 정렬이다.
// B b a c 일 경우 우선 B와 a를 스왑하여 a b B c 가 되기에 중복된 키 순서를 보장하지 못한다.
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
