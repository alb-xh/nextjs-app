import axios, { AxiosRequestConfig } from 'axios';

import {
  Pagination,
  Post,
} from '../types';

export class ApiClient {
  constructor (public readonly baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  private paginationConfig ({ page, size }: Pagination)
    : AxiosRequestConfig<any> {
    return {
      params: {
        limit: size,
        offset: (page - 1) * size,
      },
    };
  }

  async getPosts (pagination: Pagination): Promise<Post[]> {
    const { data: posts } = await axios('/api/posts', this.paginationConfig(pagination));
    return posts as Post[];
  }
};
