#pragma strict

//每隔多少秒生成一个
var timeToProduct:float = 1.0;
var enemy:GameObject;

private var selfTimer:float;

function Start () {
	
}

function Update () {
	selfTimer += Time.deltaTime;

	if(selfTimer > timeToProduct){
		
		productEnemy(Random.Range(-4.0,4.0));
		selfTimer = 0.0;
	}
}

function productEnemy(yPosition:float) {
	
	Instantiate(enemy,new Vector3(5.5,yPosition,-1.0),Quaternion.identity);
}
