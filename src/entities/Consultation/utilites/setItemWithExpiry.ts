export default function setItemWithExpiry(key: string, value: string, days: number, consultationDay: string) {
  const now = new Date();
  const expiryTime = now.getTime() + days * 24 * 60 * 60 * 1000;
  const item = {
    time: value,
    expiry: expiryTime,
    consultationDay: consultationDay,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
