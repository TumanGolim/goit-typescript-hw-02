function getPromise<T>(): Promise<T> {
  return new Promise((resolve) => {
    resolve(["Text", 50] as T); // Використовуємо "as T" для забезпечення правильного типу масиву
  });
}

getPromise<[string, number]>().then((data) => {
  console.log(data);
});

export {};
