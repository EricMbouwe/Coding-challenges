def recursive_binary_search(arr, target):
    if len(arr) == 0:
        return False
    else:
        middle = (len(arr))//2

        if arr[middle] == target:
            return True
        else:
            if arr[middle] < target:
                return recursive_binary_search(arr[middle+1:], target)
            else:
                return recursive_binary_search(arr[:middle], target)


def verify(result):
    print('Target found:', result)


tab = [1, 2, 3, 7, 8, 9, 10]

res1 = recursive_binary_search(tab, 7)
res2 = recursive_binary_search(tab, 14)

verify(res1)
verify(res2)
