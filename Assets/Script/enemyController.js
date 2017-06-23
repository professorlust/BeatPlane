#pragma strict

var speed:int = 1;
var bloomAnimation:GameObject;

private var player:GameObject;
private var fxHor:Vector3;
private var fxVer:Vector3;
private var hp:int = 3;
function Start () {
	player = GameObject.Find("player");
}

function Update () {

	//防抖动
	if(player.transform.position.x > transform.position.x + 0.05){
		fxHor = Vector3.right;
		if(transform.localScale.x > 0){
			flip();
		}
	}else if(player.transform.position.x < transform.position.x - 0.05){
		fxHor = Vector3.left;
		if(transform.localScale.x < 0){
			flip();
		}
	}else{
		fxHor = Vector3.zero;
	}

	if(player.transform.position.y > transform.position.y + 0.05){
		fxVer = Vector3.up;
	}else if(player.transform.position.y < transform.position.y - 0.05){
		fxVer = Vector3.down;
	}else{
		fxVer = Vector3.zero;
	}
	transform.Translate(fxHor * Time.deltaTime * speed);
	transform.Translate(fxVer * Time.deltaTime * speed);
}

//转身
function flip(){
	var theScale:Vector3 = transform.localScale;
    theScale.x *= -1;
    transform.localScale = theScale;
}

//function OnCollisionEnter(collision:Collision){
//
//	print("enemyPlane collider");
//}

function OnTriggerEnter2D(collider:Collider2D){
	if(collider.tag.Equals("bullet")){
		hp--;
	}

	if(collider.tag.Equals("Player")){
		hp-=4;
	}

	if(hp <= 0){
		Instantiate(bloomAnimation,new Vector3(transform.position.x - 0.2,transform.position.y,transform.position.z),transform.rotation);
		GameObject.Find("Main Camera").SendMessage("addKillCount");
		Destroy(this.gameObject);
	}
}
