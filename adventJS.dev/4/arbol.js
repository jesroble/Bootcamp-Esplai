function createXmasTree(height, ornament) 
{
    let spaces = height - 1;
    let decoration = 1;
    let tree = "";
    
    for (let i = 0; i < height; i++)
    {
        tree += `${'_'.repeat(spaces)}${ornament.repeat(decoration)}${'_'.repeat(spaces)}\n`;
        spaces--;
        decoration += 2;
    }

    spaces = height - 1;
    tree += (`${'_'.repeat(spaces)}#${'_'.repeat(spaces)}\n`);
    tree += (`${'_'.repeat(spaces)}#${'_'.repeat(spaces)}\n`);
    return tree;
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/