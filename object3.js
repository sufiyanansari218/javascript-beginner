var person={id:1,name:"sufiyan"};
console.log.apply(person);
var person={
    id:1,
    name:"sufiyan",
    print:function(){
        console.log(this.id+" sufiyan "+this.name)
    },
};
person.print();
