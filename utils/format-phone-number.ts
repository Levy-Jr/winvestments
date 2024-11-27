export const formatPhoneNumber = (value: string) => {
  const cleaned = ("" + value).replace(/\D/g, "");
  const part1 = cleaned.substring(0, 2);
  const part2 = cleaned.substring(2, 7);
  const part3 = cleaned.substring(7, 11);
  let formatted = "";
  if (part1) formatted += `(${part1}`;
  if (part2) formatted += `) ${part2}`;
  if (part3) formatted += `-${part3}`;
  return formatted;
}