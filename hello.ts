// Notice: the return type `never` is important, make this function not change
// the variable type
function throwError(errorMessage: string): never {
  throw new Error(errorMessage)
}

function hello(name?: string) {
  const newName = name?.toUpperCase() ?? throwError('test-error');
  console.log(`Hello, ${newName}`)
}

hello('world');
hello();
