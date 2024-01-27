function merge(
  objA: Record<string, any>,
  objB: Record<string, any>
): Record<string, any> {
  return Object.assign({}, objA, objB);
}

const mergedObject = merge({ name: "John" }, { age: 30 });

console.log(mergedObject);
