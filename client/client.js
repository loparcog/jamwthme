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

    synth.triggerAttackRelease('C4', '8n')

    var rack = new Nexus.Rack("#appDiv");

    rack.freq.value = 0.25;

    // Show the app div
    appPage.style.display = "inline-block";
}

function showAbt()
{

}