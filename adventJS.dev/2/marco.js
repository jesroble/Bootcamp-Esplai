function createFrame(names) 
{
    let width = 0;

    for (let i = 0; names[i]; i++)
        width = Math.max(width, names[i].length);
    width += 2;

    let marco = "";
    marco += "*".repeat(width + 2) + "\n";

    for (let i = 0; names[i]; i++)
    {
        let espacios = width - (names[i].length + 2);
        marco += `* ${names[i]}${" ".repeat(espacios)} *\n`
    }

    marco += "*".repeat(width + 2) + "\n";
    console.log(marco);
}

createFrame(['midu', 'madeval', 'educalvolpz'])

//  Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(['midu'])

//  Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc'])

//  Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******
