import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { useMemo, useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const memoizedSelectedGenreId = useMemo(() => selectedGenreId, [selectedGenreId])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={memoizedSelectedGenreId} setSelectedGenreId={setSelectedGenreId} />
      <Content selectedGenreId={memoizedSelectedGenreId} />
    </div>
  )
}
