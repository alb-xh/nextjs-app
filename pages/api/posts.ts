import faker from '@faker-js/faker';

import type { NextApiRequest, NextApiResponse } from 'next';
import {
  Pagination,
  Post,
} from '../../types';
import { Generator } from '../../utils';

const TOTAL_POSTS = 75;
const MAX_LIMIT = 25;

const generatePosts = ({
  limit,
  offset,
}: {
  limit: number,
  offset: number,
}): Post[] => {
  const allPosts = [ ...Array(TOTAL_POSTS) ];
  const customLimit = limit > MAX_LIMIT ? MAX_LIMIT : limit;

  return allPosts.slice(offset, offset + customLimit)
    .map(() => {
      const noDescription = Generator.number(1, 10) > 8;
      const noImage = Generator.number(1, 10) > 6
      const post = Generator.post();

      return {
        ...post,
        description: noDescription ? undefined : post.description,
        image: noImage ? undefined : post.image,
      };
    });
}

const getPostsHanler = (
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) => {
  const {
    query,
    method,
  } = req;

  const limit = Number(query.limit) || 10;
  const offset = Number(query.offset) || 0;

  switch (method) {
    case 'GET':
      const posts = generatePosts({ limit, offset });
      res.status(200).json(posts);
      break
    default:
      res.setHeader('Allow', ['GET' ])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
};

export default getPostsHanler;
