// var removeDuplicates = function(nums) {
//     let left = 0
//     for(let i=1;i<nums.length;){
//         if(nums[left] == nums[i]){
//             nums.splice(i,1)

//         }else{
//             left++
//             i++
//         }
//     }
//     console.log(nums)
//     return nums
// };

// var removeDuplicates = function(nums) {
//     let left = 0
//     for(let i=1;i<nums.length;){
//         if(nums[left] == nums[i]){
//             i++     
//         }else{
//             nums[left + 1] = nums[i]
//             left++
//             i++
//         }
//     }
//     console.log(left)
//     return nums
// };
//removeDuplicates([0,0,1,1,1,2,2,3,3,4])


var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,"").replace('/\s/g',"").toLowerCase()
    console.log(s.length)
    
    for(let i=0;i<s.length/2;i++){
        if(s[i]!=s[s.length-1-i]){
            return false
        }
    }
    return true
};

isPalindrome("A man, a plan, a canal: Panama")