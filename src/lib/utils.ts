export function parseDate(dateValue: string) {
  const objDate = new Date(dateValue);

  return `${objDate.getMonth() + 1}/${objDate.getDate()}/${objDate.getFullYear()}`;
}
