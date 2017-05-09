import UnityEngine;
import System;

class CameraController extends MonoBehaviour {

	var player : GameObject; // assign player to this variable
	private var offset : Vector3; // empty Vector3 to store the starting position of the camera

	function Start () { // store camera's starting position so we can keep the same offset as the ball moves
		offset = transform.position;
	}

	function LateUpdate () { // updates the camera's position as the ball moves
		transform.position = player.transform.position + offset;
	}

}
