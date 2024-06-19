

const display=document.getElementById("display");
 function appendtodisplay(input)
{
    display.value+=input;
}
 function calculate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value=ERROR;
        
    }
 }
 function cleardisplay()
 {
    display.value="";
 }
 function deleteanumber()
 {
    display.value=display.value.toString().slice(0,-1);
 }