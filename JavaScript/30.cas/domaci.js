const brojevi=[-11,69,-111,290,-56,85,61,-32,78,104];
const maximum=(arr)=>{
    let maximum=Number.NEGATIVE_INFINITY;
    for(number of arr){
        if(number>maximum){
            maximum=number;
        }
    }
return maximum;
}
console.log(maximum(brojevi));

