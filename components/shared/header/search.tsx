import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { APP_NAME } from '@/lib/constants'

const categories = ['man', 'women', 'kids', 'accessories']

export default function Search() {
  return (
    <form action='/search' method='GET' className='flex items-stretch h-10'>
      <Select name='category'>
        <SelectTrigger className='dark:border-gray-200 bg-gray-100 border-r rounded-l-md rounded-r-none rtl:rounded-l-none rtl:rounded-r-md w-auto h-full text-black'>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent position='popper'>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className='flex-1 dark:border-gray-200 bg-gray-100 rounded-none h-full text-base text-black'
        placeholder={`Search Site ${APP_NAME}`}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary px-3 py-2 rounded-e-md rounded-s-none h-full text-black text-primary-foreground'
      >
        <SearchIcon className='w-6 h-6' />
      </button>
    </form>
  )
}