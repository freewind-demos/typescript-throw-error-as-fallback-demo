function throwError(errorMessage: string): any {
  throw new Error(errorMessage)
}

function hello(name?: string) {
  console.log(`Hello, ${name?.toUpperCase() ?? throwError('test-error')}`)
}

hello('world');
hello();
