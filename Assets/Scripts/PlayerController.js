import UnityEngine;
import System;
class PlayerController extends MonoBehaviour {

	var speed = 800.0f; // can change this value in the inspector

	function FixedUpdate () { // infinite loop while in play mode; called before physics calculations for physics code
		var moveHorizontal : float = Input.GetAxis ("Horizontal"); // left-right input stored as a float between -1.0 and 1.0; x-value of Vector3
		var moveVertical : float = Input.GetAxis ("Vertical"); // down-up input stored as a float between -1.0 and 1.0; z-value of Vector3

		var movement = Vector3(moveHorizontal, 0.0f, moveVertical); // direction of the sum of both input values; 0.0f is y-value of Vector3 because don't want to move up

		GetComponent.<Rigidbody>().AddForce(movement * speed * Time.deltaTime); // applies force in desired direction; access rigidbody component
	}

}
