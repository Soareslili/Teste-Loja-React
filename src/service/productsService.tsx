

export async function getProducts() {
  const response = await fetch("/data/products.json");
  const data = await response.json();

  console.log("Data do fetch:", data); 

  return data.products; 
}