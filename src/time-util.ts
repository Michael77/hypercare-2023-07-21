export async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export function getUnixTime(d: Date | string | null | undefined): number {
  return new Date(d ?? "1970-01-01T00:00:00+00:00").getTime();
}

export function formatDate(dateString?: string): string {
  const now = new Date();
  const inputDate = new Date(dateString ?? "");

  // Difference in milliseconds
  const diffMs = now.getTime() - inputDate.getTime();

  // Difference in hours
  const diffHours = diffMs / (1000 * 60 * 60);

  // Difference in days
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (diffHours < 24) {
    // Format as AM/PM time if less than 24 hours ago
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(inputDate);
  } else if (diffDays < 7) {
    // Format as day of the week if less than a week ago
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      inputDate,
    );
  } else {
    // Format as short month and day of month otherwise
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(inputDate);
  }
}
