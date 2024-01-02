// 문제를 작은 2개의 문제로 분리하여 각각 해결하고, 이를 모아서 원래의 문제를 해결
// 분할(divide) - 정복(conquer) - 결합(combine)
// 시간 복잡도 : best = n log n / avg = n log n / worst = n log n
// slice를 통해 직접 배열을 나누는 경우나 인덱스를 활요해 가상으로 분할하는 경우나 공간 복잡도는 동일하게 O(n)이다.
// slice의 경우 나누는 배열이 n을 넘지 않기에 O(n), 인덱스를 사용하는 경우 가상 배열 aux가 원본 배열과 길이가 동일하기에 O(n)이다.
// n이 16이라고 할 때, slice를 사용하면 8 8, 4 4, 2 2... 이런 식으로 계속 배열을 생성하기에 공간 복잡도가 O(n log n)이지 않냐고 할 수 있겠지만,
// 나눈 배열은 사용 후 메모리 할당이 해제되었다가 다시 할당되기에 최대 길이인 n이 공간 복잡도가 되는 것이다.
// 하지만 이 경우 나눌 때마다 메모리 할당과 해제가 반복되기에 오버헤드가 약간 더 클 수 있다.
function mergeSort(arr) {
    function merge(arr, aux, left, mid, right) {
        for (let i = left; i <= right; i++) {
            aux[i] = arr[i];
        }

        let l = left;
        let r = mid + 1;
        let k = left;

        while (l <= mid && r <= right) {
            if (aux[l] <= aux[r]) {
                arr[k++] = aux[l++];
            } else {
                arr[k++] = aux[r++];
            }
        }

        while (l <= mid) arr[k++] = aux[l++];
        while (r <= right) arr[k++] = aux[r++];
    }

    function sort(arr, aux, left, right) {
        if (right <= left) return;

        let mid = Math.floor((left + right) / 2);
        sort(arr, aux, left, mid);
        sort(arr, aux, mid + 1, right);
        merge(arr, aux, left, mid, right);
    }

    let aux = new Array(arr.length);
    sort(arr, aux, 0, arr.length - 1);

    return arr;
}
