const fs = require ('fs')

const addperson = (id,fname,lname,age,city) => {
const allData = loadInfo()
const duplicateData = allData.filter ((obj) => {
return obj.id === id
})
if (duplicateData.length == 0 ) {
allData.push({
id:id,
fname:fname,
lname:lname,
age:age,
city:city,
})
saveallData (allData)
} else {
console.log("Erorr")
}
   
}

const loadInfo = () => {
try {
const dataJson = fs.readFileSync("data.Json").toString()
return JSON.parse(dataJson)
} catch {
return []
}
}
const saveallData = (allData) => {
const saveallDataJson = JSON.stringify(allData)
fs.writeFileSync("data.Json",saveallDataJson)
}
const deletedData = (id) => {
const allData = loadInfo()
const dataToKeep = allData.filter((obj) => {
return obj.id !== id
})
saveallData(dataToKeep)
console.log("successfully deleted the item")
}

const readData = (id) => {
const allData = loadInfo()
const itemNeeded = allData.find((obj) => {
return obj.id == id
})  
console.log(itemNeeded)
if (itemNeeded){
console.log(itemNeeded.id)
} else {
console.log(" id needed not found")
}
}

const listData = () => {
const allData = loadInfo()
allData.forEach((obj) => {
 console.log(obj.fname, obj.lname, obj.city)
})
}

module.exports = { 
addperson,
deletedData,
readData,
listData
}