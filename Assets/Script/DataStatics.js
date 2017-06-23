#pragma strict

static var clearKillCount:int = 20;
private var killCount:int = 0;
private var playerHp:int = 100;

function Start () {
	
}

function Update () {
	
}

function OnGUI() {
	if(killCount >= clearKillCount){
		Time.timeScale = 0;
		GUI.Box(Rect(Screen.width * 0.5 -100,Screen.height *0.5 -50,200,100),"游戏结束");
		if(GUI.Button(Rect(Screen.width * 0.5 -80,Screen.height *0.5 -20,160,40),"返回标题")){
			UnityEngine.SceneManagement.SceneManager.LoadScene(0);
		}
	}
	if(playerHp <= 0){
		Time.timeScale = 0;
		GUI.Box(Rect(Screen.width * 0.5 -100,Screen.height *0.5 -50,200,100),"你挂了");
		if(GUI.Button(Rect(Screen.width * 0.5 -80,Screen.height *0.5 -20,160,40),"返回标题")){
			UnityEngine.SceneManagement.SceneManager.LoadScene(0);
		}
	}
}


function addKillCount(){
	var txt:UI.Text = GameObject.Find("Canvas/Kill").GetComponent(UI.Text);
	killCount += 1;
	txt.text = "杀敌数：" + killCount;
}

function refreshLife(hp:int){
	var txt:UI.Text = GameObject.Find("Canvas/Life").GetComponent(UI.Text);
	playerHp =  GameObject.Find("player").GetComponent(planeController).hp;
	txt.text = "生命值：" + (playerHp<0?0:playerHp);
}
