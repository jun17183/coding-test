function mergeSort(arr) {
    function merge(arr, aux, left, mid, right) {
        for (let k = left; k <= right; k++) {
            aux[k] = arr[k];
        }

        let l = left;
        let r = mid + 1;
        k = left;

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