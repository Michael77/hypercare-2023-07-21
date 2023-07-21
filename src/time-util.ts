export async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export function getUnixTime(d: Date | string | null | undefined): number {
  return new Date(d ?? "1970-01-01T00:00:00+00:00").getTime();
}
