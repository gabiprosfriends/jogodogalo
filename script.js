const btn = document.getElementsByClassName('cell');
const arrays = document.getElementsByClassName('board')

for(let i = 0; i <= arrays.length; i++)
{
    console.log(arrays[i]);
    arrays[i].addEventListener("click", () => {
        arrays[i].innerHTML = "x";
    })
}