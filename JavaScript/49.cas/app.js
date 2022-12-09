//Sortirati niz prema title:
var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
  ];
  function sortArrByTitle(arr){
    const newArr=arr.map((el)=>el.title);
    newArr.sort();
    const newArr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr.find((el)=>el.title===newArr[i])){
            newArr2.push(arr.find((el)=>el.title===newArr[i]))
        }
    }
    return newArr2;
  }
  console.log(sortArrByTitle(library));
//   niz=["c","b","a"];
//   niz2=[2,1,3,45,-2,35];
//   console.log(niz.sort());
//   console.log(niz2.sort());


