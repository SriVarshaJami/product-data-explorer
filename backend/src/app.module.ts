import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavigationModule } from './navigation/navigation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'varsha245',
      database: 'product_explorer',
      autoLoadEntities: true,
      synchronize: true, // dev only
    }),
    NavigationModule,
  ],
})
export class AppModule {}
