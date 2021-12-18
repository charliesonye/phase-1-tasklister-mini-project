document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(e){
    e.preventDefault()
   
    newT(e.target.children[1].value)

  })
function newT(todos){
  let list = document.createElement('li')
  let btn = document.createElement('button')
  
  btn.addEventListener('click', removeTask)
  
  btn.textContent = 'X'
  list.textContent = `${todos} `
  list.append(btn)
  
  document.querySelector('#list').appendChild(list)
  
}

function removeTask(e){
e.target.parentNode.remove()
}
  
});
