// JAM CLIENT JS CODE
// GIACOMO LOPARCO

///
// FRONTEND FUNCTIONS
///

// Get all html elements
window.onload = function(){
    var frontPage = document.getElementById("frontPage");
    var appPage = document.getElementById("appPage");
    var appDiv = document.getElementById("appDiv");
    var btnStart = document.getElementById("btnstart");
    var btnAbout = document.getElementById("btnabout");
}



function startApp() 
{
    // Hide the menu
    frontPage.style.display = "none";

    // Load in the tone engine
    var synth = new Tone.Synth().toMaster()

    synth.triggerAttackRelease('G1', '8n')

    var rack = new Nexus.Rack("#appDiv");
    var piano = new Nexus.Piano("#appDiv", {
        'size': [1000, 300]
    });

    rack.freq.value = 0.25;

    // Show the app div
    appPage.style.display = "inline-block";

    // Declare any events
    piano.on('change', function(x){
        console.log(x);
        if (x.state == true)
        {
            synth.triggerAttackRelease(toNote(x.note), '8n')
        }
    });

    rack.freq.on('change', function(v){
        console.log(v * 1000);
        synth.frequency = v * 1000;
        console.log(synth.frequency.value)
    });

}

function showAbt()
{

}

///
// UTILITY FUNCTIONS
///

function toNote(x)
{
    // Middle C is 36, sharps and flats denoted by # and b, respectively
    var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#","A", "A#", "B"];
    var rem = x % 12;
    var quo = Math.floor(x/12) + 1;
    return notes[rem] + quo.toString();

}