function getSecondLargest(nums) {

    var largest = nums[0];
    var secondLarge = nums[0];
    for (let i=0; i<nums.length;i++){
        if(largest<nums[i]){
            secondLarge = largest;
            largest = nums[i];
        }
        else if(nums[i]>secondLarge && nums[i]!=largest){
            secondLarge = nums[i];
        }
    }
    return secondLarge;
}
