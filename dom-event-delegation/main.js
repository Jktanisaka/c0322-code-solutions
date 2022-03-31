var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', taskClick);

function taskClick(event) {
  console.log('event target:', event.target);
  console.log('event target tagname:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('task list item', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
