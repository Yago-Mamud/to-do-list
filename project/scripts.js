//elements
const taskAdderButton = document.getElementById("taskAdder");
const taskContainer = document.getElementById("taskContainer");
//adder handler
taskAdderButton.addEventListener("click", () => {
	//new task main div
	const newTask = document.createElement("div");
	newTask.classList.add("task");
		//task information container
		const taskInfoContainer = document.createElement("div");
		taskInfoContainer.classList.add("information");
			//task name
			const taskName = document.createElement("h1");
			taskName.innerHTML = "testName";
			//task description container
			const taskDesc = document.createElement("div");
			taskDesc.classList.add("flexbox","description");
				//task difficulty
				const taskDiff = document.createElement("h2");
				taskDiff.innerHTML = "testDiff";
				//task point amount
				const taskPoints = document.createElement("h2");
				taskPoints.innerHTML = "testPoints";
		//end task button
		const taskEndButton = document.createElement("button");
		taskEndButton.innerHTML = "END TASK"
	//creates parent child relationship
		newTask.append(taskInfoContainer, taskEndButton);
		taskInfoContainer.append(taskName, taskDesc);
		taskDesc.append(taskDiff, taskPoints);
	//inserts into html
	taskContainer.appendChild(newTask);
})