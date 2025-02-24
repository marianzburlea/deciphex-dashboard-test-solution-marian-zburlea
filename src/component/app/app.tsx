import { Route, Routes, useLocation } from 'react-router-dom'
import { Nav } from '../molecule'
import { Flex, Grid } from '../atom'
import { navList } from './nav'
import { Dashboard } from '../dashboard'

export const App = () => {
  const location = useLocation()

  return (
    <Grid gridTemplateColumns="216px 1fr" height="100%">
      <Flex backgroundColor="link-water">
        <Nav list={navList} pathname={location.pathname} />
      </Flex>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pending" element={<Dashboard status="In Progress" />} />
        <Route path="/accepted" element={<Dashboard status="Accepted" />} />
        <Route path="/rejected" element={<Dashboard status="Rejected" />} />
      </Routes>
    </Grid>
  )
}
