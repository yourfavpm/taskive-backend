import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // Endpoint for client signup
  @Post('signup')
  signup(@Body() body: any) {
    return this.clientService.signup(body);
  }

  // Endpoint to see all clients (for testing)
  @Get()
  getClients() {
    return this.clientService.findAllClients();
  }
}
