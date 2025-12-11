import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class ClientService {
  async signup(data: { name: string; email: string; password: string; company?: string }) {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Save to database
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        company: data.company,
        role: 'client',
      },
    });
  }

  async findAllClients() {
    return prisma.user.findMany({
      where: { role: 'client' },
    });
  }
}
