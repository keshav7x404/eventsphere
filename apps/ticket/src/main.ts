import { NestFactory } from '@nestjs/core';
import { TicketModule } from './ticket.module';

async function bootstrap() {
  const app = await NestFactory.create(TicketModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
