import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ⚡ Enable CORS
  app.enableCors({
    origin: '*' // For testing, allow all origins. Later, replace '*' with your frontend URL
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
