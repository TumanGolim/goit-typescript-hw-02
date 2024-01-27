function merge<T extends Record<string, any>, U extends Record<string, any>>(
  objA: T,
  objB: U
): T & U {
  return { ...objA, ...objB };
}

const mergedObject = merge({ name: "John" }, { age: 30 });

console.log(mergedObject);
