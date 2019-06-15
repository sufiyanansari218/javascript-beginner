var amitabh=new Object();
console.log(amitabh);
amitabh.name="amitabh";
amitabh.familyname="bacchan";
console.log(amitabh.__proto__);
console.log(amitabh.name);
console.log(amitabh.familyname);
var abhishek=Object.create(amitabh);
abhishek.name="bunty";
console.log(abhishek);
console.log(abhishek.familyname);
console.log(abhishek.__proto__.familyname="patel")
console.log(abhishek.familyname);