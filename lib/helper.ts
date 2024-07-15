export function getRandomCharacter() {
  const characters =
    "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

export function generateRandomString(length: number) {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += getRandomCharacter();
  }
  return randomString;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

export function shorternId(id: string) {
  if (id.length <= 12) {
    return id
  }

  return( id.slice(0, 6) + "...." + id.slice(-5))
}

export function extractDate(timestamp: string) {
  const newDate = new Date(timestamp)
  return(newDate.toDateString())
}
