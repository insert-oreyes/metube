import { Stack } from '@mui/material'

import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        className='category-btn'
        style={{
          background: category.name === selectedCategory && '#bb29f2',
          color: '#fff',
        }}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCategory ? '#fff' : '#bb29f2',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)

export default Sidebar
