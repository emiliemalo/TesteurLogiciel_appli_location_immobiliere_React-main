import Layout from './components/Layout/Layout'
import Router from './router/Router'
import './App.css'

function App() {
  return (
    <div className="app">
      <Layout>
        <Router />
      </Layout>
    </div>
  )
}

export default App
