using UnityEngine;
using System;
using UnityEngine.UI; // required to use "Text" object and other UI elements

public class PlayerController : MonoBehaviour {

	public float speed = 800.0f;
	public Text scoreText; // "scoreText" will store our UI Text object
	private int count = 0; // "count" will keep track of how many cubes we picked up
	public Text winText;

	void FixedUpdate () {
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");

		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, moveVertical);

		GetComponent<Rigidbody>().AddForce (movement * speed * Time.deltaTime);
	}

	void OnTriggerEnter(Collider other) { // when the ball enters a Trigger Collider
		if (other.gameObject.tag == "PickUp") { // if the object that was entered has the tag "PickUp"
			other.gameObject.SetActive (false); // then set that object to be inactive (hide it)
			count += 1; // adds 1 to count each time we pick up a cube
			scoreText.text = "Score: " + count; // updates the text property of scoreText
		}
		if (count >=16) {
			winText.gameObject.SetActive(true);
		}
	}
}
