const yargs = require("yargs")
const data = require ("./data")

yargs.command({
command:"add",
describe:"to add",
builder:{
fname:{
describe:"first name",
demandOption:true,
type:"string",
},
lname:{
describe:"last name",
type:"string",
}},
handler:(person)=>{
data.addperson(person.id,person.fname,person.lname,person.age,person.city)
}})
yargs.parse()
yargs.command({
command:"delete",
describe:"to delete the item",  
handler:(person)=>{
data.deletedData(person.id)
}})
yargs.command({
command:"read",
describe:"to read the item",  
builder:{
id:{
describe:"read the item",
demandOption:true,
type:"string",
}},
handler:(person) => {
data.readData(person.id)
}})
yargs.command({
command:"list",
describe:"to list items",  
handler:() => {
data.listData()
}})
console.log(yargs.argv)