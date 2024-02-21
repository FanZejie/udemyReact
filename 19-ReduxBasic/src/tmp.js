var strStr = function(haystack, needle) {
    let result = -1
    for(let i=0;i<haystack.length;i++){
        if(haystack[i] === needle[0]){
             let tmpStr = haystack.slice(i,i+needle.length)
             console.log(tmpStr)
            if(tmpStr.valueOf() === needle.valueOf()){
                result = i
                return result
            }
        }
    }
    return result
};

strStr("sadbutsad","sad")