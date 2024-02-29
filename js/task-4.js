function getShippingCost(country) {
  let countryList = 'China, Chile, Australia, Jamaica';
  let price = country;
  let search = countryList.indexOf(country);
  switch (price) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;
  }
  switch (search) {
    case -1:
      search = 'Sorry, there is no delivery to your country';
      break;

    default:
      search = `Shipping to ${country} will cost ${price} credits`;
      break;
  }
  return search;
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
