#pragma strict

var m_speed:float = 2.0;
var weaponBullet : GameObject;
var attackFPS : float = 1.0;
var hp:int = 6;

private var attackColdTime:float = 0.0;
private var isColding:boolean = false;

function Start () {
	GameObject.Find("Main Camera").GetComponent(DataStatics).refreshLife(hp);
//	screenRadio = (Screen.width*1.0)/Screen.height;
//	print("Renderer --- "+GameObject.Find("Main Camera").GetComponent(Camera).WorldToScreenPoint(GetComponent(Renderer).bounds.size));
//	print("collider --- "+GetComponent(Collider2D).bounds.size);
//	print (screenRadio + "-----"+GameObject.Find("Main Camera").GetComponent(Camera).aspect);
//	print("camera --- "+GameObject.Find("Main Camera").GetComponent(Camera).orthographicSize);
}

function Update () {

//	switch(Input.inputString){
//	case "w":
//	case "W":
//		transform.Translate(0,0.1,0);
//		break;
//	case "a":
//	case "A":
//		transform.Translate(-0.1,0,0);	
//		break;
//	case "s":
//	case "S":
//		transform.Translate(0,-0.1,0);
//		break;
//	case "d":
//	case "D":
//		transform.Translate(0.1,0,0);
//		break;
//	default:
//		break;
//	}

//	if(Input.inputString == "w" || Input.inputString == "W"){
//		transform.Translate(0,0.1,0);
//	}
//	if(Input.inputString == "a" || Input.inputString == "A"){
//		transform.Translate(-0.1,0,0);
//	}
		///移动控制
		if (Input.GetKey(KeyCode.W)||Input.GetKey(KeyCode.UpArrow)){
			if(transform.position.y+GetComponent(Renderer).bounds.size.y*0.5 < GameObject.Find("Main Camera").GetComponent(Camera).orthographicSize){
				this.transform.Translate(Vector3.up*m_speed*Time.deltaTime);
			}
            
        }

        if (Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow)){
        	if(transform.position.y-GetComponent(Renderer).bounds.size.y*0.5 > GameObject.Find("Main Camera").GetComponent(Camera).orthographicSize * -1){
           	 	this.transform.Translate(Vector3.down * m_speed * Time.deltaTime);
           	}
        }

        if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow)){
        	if(transform.position.x-GetComponent(Renderer).bounds.size.x*0.5 > GameObject.Find("Main Camera").GetComponent(Camera).orthographicSize*GameObject.Find("Main Camera").GetComponent(Camera).aspect * -1){
            	this.transform.Translate(Vector3.left *m_speed * Time.deltaTime);
            }
        }

        if (Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow)){
        	if(transform.position.x+GetComponent(Renderer).bounds.size.x*0.5 < GameObject.Find("Main Camera").GetComponent(Camera).orthographicSize*GameObject.Find("Main Camera").GetComponent(Camera).aspect){
            	this.transform.Translate(Vector3.right * m_speed * Time.deltaTime);
        	}
        }

        //发射武器
        if(Input.GetKey(KeyCode.Z)||Input.GetKey(KeyCode.L)){
        	if(!isColding){
        		isColding = true;
        		Instantiate(weaponBullet,new Vector3(transform.position.x + transform.localScale.x * 0.5,transform.position.y - 0.1,-1.0),transform.rotation);
        	}
        }

        //武器冷却
        if(isColding){
        	attackColdTime += Time.deltaTime;
        }
        if(attackColdTime > 1.0/attackFPS){
        		isColding = false;
        		attackColdTime = 0.0;
       	}

        
	
}


function OnTriggerEnter2D(collider:Collider2D){
	if(collider.tag.Equals("enemy")){
		hp -= 2;
	}
	GameObject.Find("Main Camera").GetComponent(DataStatics).refreshLife(hp);
//	GameObject.Find("Main Camera").SendMessage("refreshLife");
}
