import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRouter } from '~/router'

import DefaultLayout from '~/layout/DefaultLayout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRouter.map((router, index) => {
              const Page = router.component
              let Layout = DefaultLayout

              return (
                <Route
                  key = {index}
                  path= {router.path}
                  element = {
                      <Layout>
                        <Page/>
                      </Layout>
                  }
                ></Route>
              )
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
