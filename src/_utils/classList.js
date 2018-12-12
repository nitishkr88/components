const addClassesToList = (classListRef, classes) => {
  classes.forEach(className => classListRef.add(className))
}

const removeClassesFromList = (classListRef, classes) => {
  classes.forEach(className => classListRef.remove(className))
}

export const add = (element, classString) =>
  addClassesToList(element.classList, classString.split(' '))

export const remove = (element, classString) =>
  removeClassesFromList(element.classList, classString.split(' '))
