import { FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const FavoriteToggleForm = ({ propertyId }: { propertyId: string }) => {
	return (
		<Button size='icon' variant='outline' className='p-2 cursor-pointer'>
			<FaHeart />
		</Button>
	)
}

export default FavoriteToggleForm
