var data=  document.getElementById("num");

var output= document.getElementById('output');
var from=document.getElementById("from");

function change()
{
   
    if(from.value=='celsius')
    {
        console.log(data.value);
        let newdata=(data.value* 9/5) + 32 
        
        document.getElementById('output').value=`${newdata} F`;
    }
    else{
       
        let newdata=(data.value-32)*5/9;
        document.getElementById('output').value=`${newdata} C`;   
    }
}
function clean()
{
   
    data.value=0;
    from.value=0;
    output.value=0;

}