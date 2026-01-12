import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Navigation } from './navigation.entity';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(Navigation)
    private readonly navRepo: Repository<Navigation>,
  ) {}

  // ✅ CREATE
  async create(dto: { title: string; slug: string }) {
    return this.navRepo.save({
      title: dto.title,
      slug: dto.slug,
      last_scraped_at: new Date(),
    });
  }

  // ✅ GET ALL (with pagination)
  async findAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [data, total] = await this.navRepo.findAndCount({
      order: { id: 'ASC' },
      skip,
      take: limit,
    });

    return {
      page,
      limit,
      total,
      data,
    };
  }

  // ✅ SEARCH
  async search(query: string) {
    return this.navRepo.find({
      where: [
        { title: Like(`%${query}%`) },
        { slug: Like(`%${query}%`) },
      ],
      order: { id: 'ASC' },
    });
  }

  // ✅ SCRAPE
  async scrapeNavigation() {
    const url = 'https://www.wikipedia.org';

    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      timeout: 10000,
    });

    const html = response.data;
    const $ = cheerio.load(html);

    const items: { title: string; slug: string }[] = [];

    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const slug = $(el).attr('href');

      if (title && slug && slug.startsWith('/')) {
        items.push({ title, slug });
      }
    });

    let inserted = 0;

    for (const item of items) {
      const exists = await this.navRepo.findOne({
        where: { slug: item.slug },
      });

      if (!exists) {
        await this.navRepo.save({
          title: item.title,
          slug: item.slug,
          last_scraped_at: new Date(),
        });
        inserted++;
      }
    }

    return {
      message: 'Scraping completed',
      inserted,
    };
  }
}
