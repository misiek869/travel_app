import FormInput from '@/components/form/FormInput'
import FormContainer from '@/components/form/FormContainer'
import { createPropertyAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'
import PriceInput from '@/components/form/PriceInput'
import CategoriesInput from '@/components/form/CategoriesInput'
import TextAreaInput from '@/components/form/TextAreaInput'

const CreatePropertyPage = () => {
	return (
		<section>
			<h1 className='text-2xl font-semibold mb-8 capitalize'>
				create property
			</h1>
			<div className='border p-8 rounded-md'>
				<h3 className='text-lg mb-4 font-medium'>General Info</h3>
				<FormContainer action={createPropertyAction}>
					<div className='grid md:grid-cols-2 gap-8 mb-4'>
						<FormInput
							name='name'
							type='text'
							label='Name (20 limit)'
							defaultValue='Apartment in Poland'
						/>
						<FormInput
							name='tagline'
							type='text '
							label='Tagline (30 limit)'
							defaultValue='Hope to see You Here!'
						/>
						{/* price */}
						<PriceInput />
						{/* categories */}
						<CategoriesInput />
					</div>
					{/* text area / description */}
					<TextAreaInput name={'description'} />
					<SubmitButton text='create rental' className='mt-12' />
				</FormContainer>
			</div>
		</section>
	)
}

export default CreatePropertyPage
