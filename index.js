var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) // adds element to end of original array PUSH
{
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) // adds element to begining of original array UNSHIFT
{
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten(name) // removes last element in original array POP
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name) // removes first element in original array SHIFT 
{
  kittens.shift();
}
function appendKitten(name) // new array, adds element to end of array PUSH
{
  kittens2 = kittens.push("Ralph");
  return kittens2
}
function prependKitten(name) // new array, adds element to begining of array UNSHIFT 
{
  kittens5 = kittens.unshift("Bob");
  return kittens5  
}
function removeLastKitten(name) // new array, removes last element of new array POP
{
  kittens3 = kittens.pop();
  return kittens3
}
function removeFirstKitten(name) // new array, removes first element of new array SHIFT
{
  kittens4 = kittens.shift();
  return kittens4
} 