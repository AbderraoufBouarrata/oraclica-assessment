export function getInitialValue(key: string) {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue) {
    try {
      return JSON.parse(localStorageValue);
    } catch {
      localStorage.removeItem(key);
    }
  }
  return undefined;
}
