let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string" || some instanceof String) {
  str = some as string;
} else {
}

export {};
