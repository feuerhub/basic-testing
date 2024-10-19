// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';
// import { throttle } from 'lodash';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  let mockedGet: jest.Mock;
  let mockedAxiosInstance: { get: jest.Mock };

  beforeEach(() => {
    mockedGet = jest.fn().mockResolvedValue({ data: 'Data' });
    mockedAxiosInstance = {
      get: mockedGet,
    };
    (axios.create as jest.Mock).mockReturnValue(mockedAxiosInstance);
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi('/test');
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi('/test');
    expect(mockedGet).toHaveBeenCalledWith('/test');
  });

  test('should return response data', async () => {
    const data = await throttledGetDataFromApi('/test');
    expect(data).toBe('Data');
  });
});
