var guest_array=[];
function sumbit(){
    var guest= document.getElementById("input").value;
    guest_array.push(guest);
    document.getElementById("unsorted_list").innerHTML= guest_array;
}
function show(){
    var remove= guest_array.join(" " )    ; 
     console.log(remove);
    document.getElementById("unsorted_list_one").innerHTML=remove;

}
function sort(){

 var n=   guest_array.sort();
 var remove2= n.join(" ")
    document.getElementById("sorted_list").innerHTML=remove2;
}