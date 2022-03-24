import faker from '@faker-js/faker';

import type { NextApiRequest, NextApiResponse } from 'next';
import {
  Pagination,
  Post,
} from '../../types';
import { Generator } from '../../utils';

const generatePosts = ({
  limit,
  offset,
}: Pagination): Post[] => [ ...Array(limit) ]
  .map(() => {
    const noDescription = (limit + offset) % 3 === 0;
    const noImage = (limit + offset) % 4 === 0;

    const post = Generator.post();

    return {
      ...post,
      description: noDescription ? undefined : post.description,
      image: noImage ? undefined : post.image,
    };
  })

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
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
};

export default getPostsHanler;
