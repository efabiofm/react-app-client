/* this would work if I was using axios directly but I'm using an axios instance
 * export default {
 * get: jest.fn(() => Promise.resolve({ data: {} }))
 * };
 */

const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;