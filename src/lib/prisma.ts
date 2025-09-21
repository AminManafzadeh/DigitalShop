import { PrismaClient } from '@/generated/prisma';
import type * as PrismaType from '@prisma/client';
const prisma = new PrismaClient();
export type { PrismaType };
export { prisma };
