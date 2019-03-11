import { formatPrice } from '../helpers.js';

it('formats price', () => {
  const formatted = formatPrice(1250);
  expect(formatted).toBe('CRC 1,250.00');
});
