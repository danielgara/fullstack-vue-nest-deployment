import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

const dbType = (process.env.DB_TYPE ?? 'sqlite').toLowerCase();

@Module({
  imports: [
    TypeOrmModule.forRoot(
      dbType === 'sqlite'
        ? {
            type: 'sqlite',
            database: process.env.SQLITE_PATH ?? 'database.sqlite',
            autoLoadEntities: true,
            synchronize: true,
          }
        : {
            type: 'mysql',
            host: process.env.DB_HOST ?? 'mysql',
            port: Number(process.env.DB_PORT ?? 3306),
            username: process.env.DB_USER ?? 'app_user',
            password: process.env.DB_PASSWORD ?? 'app_password',
            database: process.env.DB_NAME ?? 'app_db',
            autoLoadEntities: true,
            synchronize: true,
          },
    ),
    HomeModule,
    BooksModule,
  ],
})
export class AppModule {}
