//ADDER HANDLER
//elements
const taskAdderButton = document.getElementById("taskAdder");
const taskContainer = document.getElementById("taskContainer");
const taskDiffTXT = document.getElementById("taskDiffTXT");
const taskNameTXT = document.getElementById("taskNameTXT");
//parses the saved task into an array
const savedTasks = JSON.parse(localStorage.getItem("loadTask"));
//makes sure its parsed to an array before loading, otherwise it makes an empty one
let tasks = Array.isArray(savedTasks) ? savedTasks : [];
tasks.forEach(task => taskRender(task));
//renders
function taskRender(taskObj) {
	const newTask = document.createElement("div");
	newTask.classList.add("task");
		//task information container
		const taskInfoContainer = document.createElement("div");
		taskInfoContainer.classList.add("information");
			//task name
			const taskName = document.createElement("h1");
			taskName.innerHTML = taskObj.name;
			//task description container
			const taskDesc = document.createElement("div");
			taskDesc.classList.add("flexbox","description");
				//task difficulty
				const taskDiff = document.createElement("h2");
				taskDiff.innerHTML = taskObj.diff;
				//task point amount
				const taskPoints = document.createElement("h2");
				taskPoints.innerHTML = taskObj.points;
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
		tasks = tasks.filter((task) => { 
			if (task.id !== taskObj.id) {
				return true;
			} else {
				return false;
			}
		});
		localStorage.setItem("loadTask", JSON.stringify(tasks));
		levelHandler(taskObj.points);
	});
}
//adds new tasks
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
	//creates the object
	const taskObject = {
		id: Date.now(),
		name: taskNameValue,
		diff: taskDiffValue,
		points: taskPointsValue
	};
	tasks.push(taskObject);
	//uploads object to JSON
	localStorage.setItem("loadTask", JSON.stringify(tasks));
	//renders
	taskRender(taskObject);
});

//handles levels
function levelHandler(levelPoints) {
	const progressBar = document.getElementById("levelBar")
	let progressValue = Number(levelPoints);
	let maxValue = Number(progressBar.max);
	let currentXP = Number(progressBar.value);
	let cXPPV = progressValue + currentXP;
	if (cXPPV >= maxValue) {
		progressBar.value = cXPPV - maxValue;
		progressBar.max = maxValue + 10;
	} else {
		progressBar.value = cXPPV;
	}
}