export async function register() {
  if (
    typeof globalThis.localStorage === "undefined" ||
    typeof globalThis.localStorage.getItem !== "function"
  ) {
    const storage: Record<string, string> = {};
    globalThis.localStorage = {
      getItem: (key: string) => storage[key] ?? null,
      setItem: (key: string, value: string) => {
        storage[key] = value;
      },
      removeItem: (key: string) => {
        delete storage[key];
      },
      clear: () => {
        for (const k of Object.keys(storage)) delete storage[k];
      },
      key: (index: number) => Object.keys(storage)[index] ?? null,
      get length() {
        return Object.keys(storage).length;
      },
    } as Storage;
  }
}
