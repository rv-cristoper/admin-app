import ReactDOM from "react-dom"

const createElementToAdd = (idC) => {
  if (document.querySelector("#" + idC))
    return
  let d = document.createElement("div")
  d.id = idC
  return document.body.append(d)
}

export const addElementBody = (e) => {
  createElementToAdd("output")
  ReactDOM.render(e, document.getElementById("output"))
}

export const removeElementBody = () => {
  window.onbeforeunload = function () {
    return null
  }
  document.getElementById("output")?.remove()
}