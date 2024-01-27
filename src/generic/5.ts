interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const stringKeyValuePair: KeyValuePair<string, number> = {
  key: "age",
  value: 25,
};

const numberKeyValuePair: KeyValuePair<number, boolean> = {
  key: 42,
  value: true,
};

function printValue<K, V>(pair: KeyValuePair<K, V>): void {
  console.log(pair.value);
}

printValue(stringKeyValuePair);
printValue(numberKeyValuePair);
