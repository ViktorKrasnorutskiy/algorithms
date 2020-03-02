array = [5,32,2,1,5,3,44,32,3213,4]

# iterations = (n-1)*(n-1)/2
# O(n**2)
def bubbleSort(arr):
    for i in range(len(arr)-1):
        for k in range(i+1, len(arr)):
            if arr[i] > arr[k]:
                arr[i],arr[k] = arr[k],arr[i]
    return arr


print('input array : {}'.format(array))
print('output array : {}'.format(bubbleSort(array)))
