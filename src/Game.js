let knightPosition = [0,0]
let observer = null

function emitChange() {
  observer(knightPosition)
}

export function observe(o) {
  observer = o;
  emitChange();
}

export function moveKnight(toX, toY){
  knightPosition = [toX, toY]
  emitChange()
}
