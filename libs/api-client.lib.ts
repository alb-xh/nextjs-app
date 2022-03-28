import axios, { AxiosRequestConfig } from 'axios';

import {
  Pagination,
  Post,
} from '../types';

export class ApiClient {
  constructor(public readonly baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  private static paginationParams(pagination: Pagination) {
    const { size, page } = pagination;

    return {
      limit: size,
      offset: (page - 1) * size,
    };
  }

  private async request<T>(
    endpoint: string,
    config: AxiosRequestConfig,
  ): Promise<T> {
    const { data } = await axios(this.baseUrl + endpoint, config);
    return data as T;
  }

  async getPosts(pagination: Pagination): Promise<Post[]> {
    const posts = await this.request<Post[]>('/api/posts', {
      params: {
        ...ApiClient.paginationParams(pagination),
      },
    });

    return posts;
  }
}
