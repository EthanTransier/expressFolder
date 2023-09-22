const result = document.querySelector(".result")

const fetchPeople = async() =>{
    try{
        const {data} = await axios.get('/api/people')
        console.log(data)

        const people = data.data.map((person)=>{
            return `<h5>${person.name}<button class="btn" onclick="editPerson('${person.name}','${person.id}')">Edit</button><button class="btn" onclick="deletePerson('${person.id}')">Delete</button></h5>`
        })
        result.innerHTML = people.join("")
    }catch (error) {
        formAlert.textContent = error.response.data.msg
    }
}
fetchPeople();


// HTML Submit Form
const btn = document.querySelector(".submit-btn")
const input = document.querySelector(".form-input")
const formAlert = document.querySelector(".form-alert")

btn.addEventListener("click", async (e)=>{
    e.preventDefault()
    const nameValue = input.value
    
    try {
        if(editMode == false) {
            const {data} = await axios.post("api/people", {name: nameValue})
            const h5 = document.createElement("h5");
            h5.textContent = data.person;
            
            // const editButton = document.createElement("button");
            // editButton.classList.add("btn");
            // editButton.textContent = 'Edit';

            // const deleteButton = document.createElement("button");
            // deleteButton.classList.add("btn")
            // deleteButton.textContent = 'Delete';
            
            // h5.appendChild(editButton);
            // h5.appendChild(deleteButton)

            result.appendChild(h5)
            fetchPeople();
        }else {
            const name = input.value
            fetch(`/api/people/${currentPersonID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({name: name})
            })
            fetchPeople();
            editMode = false;
        }
        
    } catch (error){
        console.log(error)
        // formAlert.textContent = error.response.data.msg
    }
    input.value = ""
})

var editMode = false;
var currentPersonID = '';

function editPerson(personName, personID){
    editMode = true;
    console.log('test 1')
    input.value = personName;
    currentPersonID = personID;
    
}

function deletePerson(personID){
    fetch(`/api/people/${personID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        // body: JSON.stringify({name: name})
    })
    fetchPeople();
}

