'use strict'
const editor = document.querySelector('#editor')

function restore(container) {
  const json = localStorage.editorData
  if (!json) {
    return
  }
  const data = JSON.parse(json)
  const { text } = data
  container.value = text
}

function save(text) {
  localStorage.editorData = JSON.stringify({
    text,
  })
}

restore(editor)

editor.addEventListener('keyup', (e) => {
  const text = e.target.value

  save(text)
})
