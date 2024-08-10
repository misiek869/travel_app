import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
	firstName: z.string().min(2, { message: 'min length is' }),
	// lastName: z.string().max(5, { message: 'max length is 5' }),
	lastName: z.string().min(2, { message: 'min length is' }),
	username: z.string().min(2, { message: 'min length is' }),
})
