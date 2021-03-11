const container = document.querySelector('.container');
const btnAddNewNode = document.querySelector('#add-note');

// Every time we add a new note, add eventListener to that specific note as well
btnAddNewNode.addEventListener('click', () => {

    let noteDiv = document.createElement('div');
    noteDiv.classList = 'note';
    noteDiv.innerHTML =
        `<div class="tool">
        <i class="fas fa-edit btnEdit"></i>
        <i class="fas fa-trash btnDelete"></i>
    </div>
    <div class="text-field">
        <textarea></textarea>
    </div>`;

    container.appendChild(noteDiv);

    const btnDelete = noteDiv.querySelector('.btnDelete');
    const btnEdit = noteDiv.querySelector('.btnEdit');

    btnDelete.addEventListener('click', (e) => {
        e.currentTarget.parentElement.parentElement.remove();
    });

    btnEdit.addEventListener('click', (e) => {
        let curTextField = e.currentTarget.parentElement.nextElementSibling.firstElementChild;
        curTextField.disabled = curTextField.disabled ^ 1;
    });
});