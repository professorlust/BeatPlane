#pragma strict

private var isPlaying:boolean = true;

function Start () {
	
}

function Update () {
	
}


function OnGUI(){

	if(isPlaying){
		if(GUI.Button(Rect(Screen.width - 50,10,40,40),"||")){
			Time.timeScale = 0;
			isPlaying = false;
		}
	}else{
		GUI.Box(Rect(Screen.width * 0.5 - 100,Screen.height * 0.5 - 70, 200,160),"暂停");
		if(GUI.Button(Rect(Screen.width * 0.5 - 80,Screen.height * 0.5 - 40, 160,30),"回到游戏")){
			Time.timeScale = 1;
			isPlaying = true;
		}
		if(GUI.Button(Rect(Screen.width * 0.5 - 80,Screen.height * 0.5, 160,30),"返回标题界面")){
			UnityEngine.SceneManagement.SceneManager.LoadScene(0);
		}
		if(GUI.Button(Rect(Screen.width * 0.5 - 80,Screen.height * 0.5 + 40, 160,30),"退出游戏")){
			Application.Quit();
		}
	}
}