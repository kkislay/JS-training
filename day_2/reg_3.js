let pattern = /jpmc/
let insensitivepattern = /jpmc/i
console.log('this happens in jpmc'.search(pattern))
console.log('this happens in JPMC'.search(pattern))
console.log('this happens in JPMC'.search(insensitivepattern))