let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
  )
  addTopic(
    'Verb ending in -ing',
    'While I was there the gnomes were ',
    '. They were unstoppable in their act.',
  )
  addTopic(
    'Noun',
    'they seemed to be worshipping the ',
    '. I decided their religion was worth investing in so i decided to join.',
  )

  addTopic(
    'Dog Name',
    'They took my dog ',
    '. I never saw him again.',
  )
  addTopic(
    'Food',
    'I tried to offer them ',
    '. It held them off for an hour or so.',
  )
  addTopic(
    'Weapon',
    'They mauled me with a',
    '. I cannot move.',
  )


  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler).parent(inputDivUI)

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  let inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  let output = createP('').parent(outputDivUI)

  function updateOutputHandler() {
    output.html(intro + inputFieldUI.value().toLowerCase() + detail)
  }
}
