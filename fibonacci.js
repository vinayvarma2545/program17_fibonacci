const value = 10;
let n1=0;
let n2=1;
let next;

for(i=1;i<=value;i++){
    console.log(n1);
    next=n1+n2
    n1=n2;
    n2=next;
}