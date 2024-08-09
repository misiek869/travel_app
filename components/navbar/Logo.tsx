import { FaRegCompass } from 'react-icons/fa'
import Link from 'next/link'
import { Button } from '../ui/button'

const Logo = () => {
	return (
		<Button size='icon' asChild>
			<Link href='/'>
				<FaRegCompass className='w-6 h-6' />
			</Link>
		</Button>
	)
}

export default Logo
