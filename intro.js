window.onload=display_Instructions();
window.addEventListener('keydown', function(event) {
    var key=String.fromCharCode(event.keyCode);
    console.log(key);
    let valid_keys=['C','D','E','F','G','A','B','R','T','Y','U','I','O'];
    if(valid_keys.includes(key)==true)
    {
        playSound(case_match(key));
    }
    else
        console.log("Not a valid key");
    
});
function playSound(key_name)
{
    console.log(key_name);
    try {
        var audio = new Audio(`${key_name}.wav`);
        audio.play();   
        document.getElementById("last_note").innerHTML=`Last Note Played: ${key_name.replace("s","#")}`;
    } catch (error) {
        console.log("No such file found");
    }
    
}
function change_color()
{
    for(let ascii_value=65;ascii_value<=72;ascii_value++)
    {
        let r=Math.ceil(Math.random()*256);
        let g=Math.ceil(Math.random()*256);
        let b=Math.ceil(Math.random()*256);
        let mycolor="rgb("+r+","+g+","+b+")";
        let button_id=String.fromCharCode(ascii_value);
        if(ascii_value==72)
            button_id='C6';
        document.getElementById(`${button_id}`).style.background=mycolor;
    }
}
function reset_color()
{
    for(let ascii_value=65;ascii_value<=72;ascii_value++)
    {
        let mycolor="rgb(256,256,256)";
        let button_id=String.fromCharCode(ascii_value);
        if(ascii_value==72)
            button_id='C6';
        document.getElementById(`${button_id}`).style.background=mycolor;
    }
}
function display_Instructions()
{   var introduction = new String("Welcome to the Piano Page!\nThe notes can be played by clicking on them, or by using keyboard keys\n");
    introduction+="The keyboard keys corresponding to their respective notes are\n";
    let valid_keys=['C','D','E','F','G','A','B','R','T','Y','U','I','O'];
    for(let i=0;i<13;i++)
    {
        let note="";
        let keyboard_key=valid_keys[i];
        note=case_match(keyboard_key);
        console.log("Dsfsfs");
        introduction+=`\n${note} note : ${keyboard_key}`;
    }
    alert(introduction);
}
function display_aboutUs(){
    let about_us=new String("©Copyrights Piano Minor Project . All Rights Reserved. Designed by Vikhyat Vinod Kumar");
    alert(about_us);
}
function case_match(k)
{
    switch(k)
        {
            case 'R': return 'Cs';break;
            case 'T': return 'Ds';break;
            case 'Y': return 'Fs';break;
            case 'U': return 'Gs';break;
            case 'I': return 'As';break;
            case 'O': return 'C6';break;
            case 'C': return 'C';break;
            case 'D': return 'D';break;
            case 'E': return 'E';break;
            case 'F': return 'F';break;
            case 'G': return 'G';break;
            case 'A': return 'A';break;
            case 'B': return 'B';break;
            case 'O': return 'C6';break;
        }
        return null;
}