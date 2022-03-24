import faker from '@faker-js/faker';

import {
  Image,
  Post,
} from '../types';

export class Generator {
  static number (min = 0, max = Infinity) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static image(): Image {
    const width = Generator.number(200, 600);
    const height = Generator.number(200, 600);

    return {
      src: faker.image.imageUrl(width, height),
      alt: faker.lorem.sentence(),
      width,
      height,
    };
  }

  static post(): Post {
    return {
      id: Generator.number(0, 99999),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      image: Generator.image(),
    };
  }
};
