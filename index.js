function iterativeLog(array)
{
  array.forEach(( element, index) => {
    console.log(`${index}: ${element}`);
  })
}


function iterate(callback)
{
  var array = [1,2,3];
  array.forEach(ele => callback(ele))
  return array
}


function doToArray(array, callback)
{
  array.forEach(ele => callback(ele))
}
