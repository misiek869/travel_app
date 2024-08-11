import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type TextAreaInputProps = {
	name: string
	labelText?: string
	defaultValue?: string
}

const TextAreaInput = ({
	name,
	labelText,
	defaultValue,
}: TextAreaInputProps) => {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize'>
				{labelText || name}
			</Label>
			<Textarea
				id={name}
				name={name}
				defaultValue={defaultValue || tempDefaultDescription}
				rows={5}
				required
				className='leading-loose'
			/>
		</div>
	)
}

const tempDefaultDescription =
	'Spending a holiday in a beautiful apartment in Poland is a fantastic way to relax and explore the charms of this country. Poland offers many picturesque locations where you can rent a comfortable apartment, perfect for family vacations or a romantic getaway.'

export default TextAreaInput
