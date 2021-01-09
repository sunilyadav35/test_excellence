/**
 * 
 * Question 5
Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

Write a code to sort the object by id 
I.e final output should have objected sort by id’s


 */

var items = [
    {
     "id": 4,
     "name": "abc"},
    {
     "id": 10,
     "name": "ab2"},
    {
     "id": 6,
     "name": "abc3"},
    {
     "id": 5,
     "name": "abc5"},
    
    ];
    
    function dynamicSort(property) {
       items.sort(function(a, b) {
        if (a.id !== b.id) {
            return a.id - b.id
        }
        if (a.name === b.name) {
          return 0;
        }
        return a.name > b.name ? 1 : -1;
    });
    }
    
    
    items.sort(dynamicSort('id')).sort(dynamicSort('name')); 
    console.log(items); 
    
    