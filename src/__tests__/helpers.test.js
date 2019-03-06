import { formatPrice } from '../helpers.js';

it('formats price', () => {
  const formatted = formatPrice(1250);
  console.log(formatted);
  expect(formatted).toBe('CRC 1,250.00');
});
