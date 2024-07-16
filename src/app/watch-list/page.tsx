import Header from '@components/molecules/Header'
import WatchList from '@components/organisms/WatchList'

export const metadata = {
  title: 'Watch List',
}

export default function WatchListPage() {
  return (
    <div className="h-full">
      <Header />
      <WatchList />
    </div>
  )
}
