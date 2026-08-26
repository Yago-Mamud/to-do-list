//ADDER HANDLER
//elements
const taskAdderButton = document.getElementById("taskAdder");
const taskContainer = document.getElementById("taskContainer");
const taskDiffTXT = document.getElementById("taskDiffTXT");
const taskNameTXT = document.getElementById("taskNameTXT");
taskAdderButton.addEventListener("click", () => {
	//gets current
	const taskNameValue  = taskNameTXT.value;
	const taskDiffValue = taskDiffTXT.value;
	const taskPointsValue = taskDiffTXT.options[taskDiffTXT.selectedIndex].getAttribute("data-points");
	//validation
	if (taskNameValue == "" || taskDiffValue == "") {
		alert("Please, fill out every field");
		return false;
	}
	//new task main div
	const newTask = document.createElement("div");
	newTask.classList.add("task");
		//task information container
		const taskInfoContainer = document.createElement("div");
		taskInfoContainer.classList.add("information");
			//task name
			const taskName = document.createElement("h1");
			taskName.innerHTML = taskNameValue;
			//task description container
			const taskDesc = document.createElement("div");
			taskDesc.classList.add("flexbox","description");
				//task difficulty
				const taskDiff = document.createElement("h2");
				taskDiff.innerHTML = taskDiffValue;
				//task point amount
				const taskPoints = document.createElement("h2");
				taskPoints.innerHTML = taskPointsValue;
		//end task button
		const taskEndButton = document.createElement("button");
		taskEndButton.classList.add("taskEnder");
		taskEndButton.innerHTML = "END TASK"
	//creates parent child relationship
		taskInfoContainer.append(taskName, taskDesc);
		taskDesc.append(taskDiff, taskPoints);
		newTask.append(taskInfoContainer, taskEndButton);
	//inserts into html
	taskContainer.appendChild(newTask);
	//cleans input fields
	taskNameTXT.value = "";
	taskDiffTXT.selectedIndex = 0;
	//handles task ending
	taskEndButton.addEventListener("click", () => {
		newTask.remove();
	});
});