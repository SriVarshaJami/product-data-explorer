import {
  Controller,
  Get,
  Post,
  Body,
  Query,
} from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { CreateNavigationDto } from './dto/create-navigation.dto';

@Controller('navigation')
export class NavigationController {
  constructor(
    private readonly navigationService: NavigationService,
  ) {}

  // ✅ CREATE
  @Post()
  create(@Body() dto: CreateNavigationDto) {
    return this.navigationService.create(dto);
  }

  // ✅ GET ALL (pagination)
  @Get()
  findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    return this.navigationService.findAll(
      Number(page),
      Number(limit),
    );
  }

  // ✅ SEARCH
  @Get('search')
  search(@Query('q') q: string) {
    return this.navigationService.search(q);
  }

  // ✅ SCRAPE
  @Post('scrape')
  scrape() {
    return this.navigationService.scrapeNavigation();
  }
}
