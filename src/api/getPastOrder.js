export default async function getPastOrder(order) {
  console.log(order);
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
