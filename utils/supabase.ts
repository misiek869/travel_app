import { createClient } from '@supabase/supabase-js'

const bucket = 'travel'

// export const supabase = createClient(
// 	process.env.SUPABASE_URL as string,
// 	process.env.SUPABASE_KEY as string
// )


const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_KEY as string

const supabase = createClient(url, key)

export const uploadImage = async (image: File) => {
	const timestamp = Date.now()
	const newName = `/users/${timestamp}-${image.name}`;
	// const newName = `${timestamp}-${image.name}`

	const { data, error } = await supabase.storage
		.from(bucket)
		.upload(newName, image, {
			cacheControl: '3600',
		})


	if (!data) throw new Error('Image upload failed')

	return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl
}
