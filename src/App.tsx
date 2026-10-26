import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ToastProvider } from './components/Toast'
import { db } from './lib/db'
import { startDueTaskWatcher } from './lib/notifications'
import { today } from './lib/schedule'
import { AddPlantPage } from './pages/AddPlant'
import { CatalogPage } from './pages/Catalog'
import { CatalogPlantPage } from './pages/CatalogPlant'
import { IdentifyPage } from './pages/Identify'
import { MyPlantsPage } from './pages/MyPlants'
import { SettingsPage } from './pages/Settings'
import { TodayPage } from './pages/Today'
import { UserPlantDetailPage } from './pages/UserPlantDetail'

function Nav() {
  const due = useLiveQuery(
    () => db.reminders.where('nextDue').belowOrEqual(today()).filter((r) => r.enabled).count(),
    [],
  )
  const items: Array<[string, string, string]> = [
    ['/', '🗓️', 'Today'],
    ['/plants', '🪴', 'My plants'],
    ['/catalog', '📖', 'Catalog'],
    ['/identify', '🔍', 'Identify'],
    ['/settings', '⚙️', 'Settings'],
  ]
  return (
    <nav className="nav">
      <div className="nav-inner">
        {items.map(([to, ico, label]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="ico">{ico}</span>
            {label}
            {to === '/' && due ? <span className="badge">{due}</span> : null}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    const theme = localStorage.getItem('plant-app:theme')
    if (theme && theme !== 'auto') document.documentElement.setAttribute('data-theme', theme)
    return startDueTaskWatcher()
  }, [])

  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <main className="app">
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/plants" element={<MyPlantsPage />} />
            <Route path="/plants/new" element={<AddPlantPage />} />
            <Route path="/plants/:id" element={<UserPlantDetailPage />} />
            <Route path="/plants/:id/edit" element={<AddPlantPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:plantId" element={<CatalogPlantPage />} />
            <Route path="/identify" element={<IdentifyPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<TodayPage />} />
          </Routes>
        </main>
        <Nav />
      </ToastProvider>
    </BrowserRouter>
  )
}
