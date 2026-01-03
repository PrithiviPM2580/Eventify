import { PrismaNeon } from '@prisma/adapter-neon'
// CRITICAL: Import from your custom output path, adding /client at the end
import { PrismaClient } from '@/generated/prisma/client.js'

const adapter = new PrismaNeon({ 
  connectionString: process.env.DATABASE_URL 
})

const prisma = new PrismaClient({ adapter })

export default prisma