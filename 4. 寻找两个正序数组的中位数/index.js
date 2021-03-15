var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  nums1 = nums1.concat(nums2)
  nums1.sort((a, b) => a - b)
  if (nums1.length % 2 == 0) {
   
  }
  return nums1[Math.ceil(nums1.length / 2) - 1]:
};
nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2));