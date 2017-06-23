#pragma strict

var mySkin:GUISkin;

private var buttonX:float;
private var buttonY:float;
private var startButtonPosition:Rect;
private var helpButtonPosition:Rect;
private var exitButtonPosition:Rect;

function Start () {
	buttonX = Screen.width * 0.5 - 60;
	buttonY = Screen.height * 0.5 - 70;
	startButtonPosition = new Rect(buttonX, buttonY, 120, 40);
	helpButtonPosition = new Rect(buttonX, buttonY + 50, 120, 40);
	exitButtonPosition = new Rect(buttonX, buttonY + 100, 120, 40);
}

function Update () {
	
}


function OnGUI () {
	GUI.skin = mySkin;
	Time.timeScale = 1;
	if(GUI.Button(startButtonPosition,"Start",GUI.skin.GetStyle("StartButton"))){
		UnityEngine.SceneManagement.SceneManager.LoadScene(1);
	}

	if(GUI.Button(helpButtonPosition,"Help",GUI.skin.GetStyle("HelpButton"))){
		UnityEngine.SceneManagement.SceneManager.LoadScene(2);
	}

	if(GUI.Button(exitButtonPosition,"Exit",GUI.skin.GetStyle("ExitButton"))){
		Application.Quit();
	}


}