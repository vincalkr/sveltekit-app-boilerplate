export function read<T = Record<string, any>>(name: string): T {
  return JSON.parse(localStorage.getItem(name) || 'null');
}

export function write<T = Record<string, any>>(name: string, value: T) {
  localStorage.setItem(name, JSON.stringify(value));
}

export function remove(name: string) {
  localStorage.removeItem(name);
}
