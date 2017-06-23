#pragma strict

var skin:GUISkin;

function Start () {
	
}

function Update () {
	
}


function OnGUI(){
	GUI.skin = skin;
	GUI.Label(Rect(120,400,200,40),"击败"+DataStatics.clearKillCount+"敌人",GUI.skin.GetStyle("HelpLabel"));

	if(GUI.Button(Rect(Screen.width - 200,Screen.height - 200, 160,50),"返回标题")){
		UnityEngine.SceneManagement.SceneManager.LoadScene(0);
	}
}