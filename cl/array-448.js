/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers_cl = function(nums) {
    
    var resultnums = new Array();
    nums.map(
        item =>{
            if(nums.indexOf(item) === -1)
            {
                resultnums.push(item)
            }
        }
    )
    return resultnums;
    
};