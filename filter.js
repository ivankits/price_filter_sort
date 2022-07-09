class Course
{
    name='';
    prices=[];
    constructor(n='', p=[])
    {
        this.name=n;
        this.prices=p;
    }
}

let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];


function isInRange (p=[null, null]){

    return  (v=new Course())=>{
    
      let prices=[...v.prices];
     let pred=[...p]

      //normalize predicate and prices

      if (pred[0]===null) pred[0]=0
      if (pred[1]===null) pred[1]=Infinity

      if (prices[0]===null) prices[0]=pred[0];
      if (prices[1]===null) prices[1]=pred[1]<prices[0]?pred[1]:prices[0];

      return (prices[0]>=pred[0])&&(prices[1]<pred[1]);
    }
}



function sortingPredicate(a=new Course(), b=new Course())
{

    let l=[...a.prices];
    let r=[...b.prices];

    if (l[0]===null) l[0]=-1;
    if (l[1]===null) l[1]=Infinity;

    if (r[0]===null) r[0]=-1;
    if (r[1]===null) r[1]=Infinity;

    

    if (l[0]<r[0]) return -1;
    if (l[0]>r[0]) return 1;
    
    if (l[1]<r[1]) return -1;
    if (l[1]>r[1]) return 1;
    

}

