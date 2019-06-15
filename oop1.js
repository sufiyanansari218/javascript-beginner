function emp(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
    var print=function(){
        console.log(this.name+""+this.id);
    };
}
var result=emp(1,"sufiyan");
var etc=emp(1,"etc",200);
var lol=emp(2,"lol");
console.log(etc);
console.log(lol)
lol.print();