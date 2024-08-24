const inputBox = document.getElementById("input");
const taskContainer = document.getElementById("taskContainer");
function addTask()
{
    if (inputBox.value === '')
    {
        alert("Enter a task");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.className = 'icon';
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    storeData();
}

taskContainer.addEventListener("click", function (e)
{
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        storeData();
    }

    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData()
{
    localStorage.setItem("data", taskContainer.innerHTML);
}

function showTask()
{
    taskContainer.innerHTML = localStorage.getItem("data");
}

showTask();

document.getElementById('clearAll').addEventListener('click', function ()
{
    taskContainer.innerHTML = "";
    storeData();
});