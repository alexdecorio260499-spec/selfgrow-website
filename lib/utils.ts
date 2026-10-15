export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCapacity(count: number, unit = 'slots'): string {
  return `${count} ${unit}`;
}

export function formatDimensions(w?: number, d?: number, h?: number): string {
  if (!w || !d || !h) return 'Compact footprint';
  return `${w} × ${d} × ${h} cm`;
}
