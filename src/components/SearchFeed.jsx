import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <Box p={2} sx={{ flex: 2, overflowY: 'auto', height: '90vh' }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#FFF' }}>
        Search results for:
        <span style={{ color: '#bb29f2' }}> {searchTerm} </span>Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed