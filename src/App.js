import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRouter, publicRouter } from '~/router';

import DefaultLayout from '~/layout/DefaultLayout';
import AdminLayout from '~/layout/AdminLayout';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector((state) => state.auth.user?.data);
    // console.log(typeof   user?.role);
    const Page404 = () => <div>404 not found</div>;
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, index) => {
                        const Page = router.component;
                        let Layout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        } else if (router.layout === undefined) {
                            Layout = DefaultLayout;
                        }

                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                    {user?.role === 'ADMIN' &&
                        privateRouter.map((router, index) => {
                            const Page = router.component;
                            let Layout = Fragment;
                            // if (router.layout) {
                            //     Layout = router.layout;
                            // } else if (router.layout === null) {
                            //     Layout = Fragment;
                            // } else if (router.layout === undefined) {
                            //     Layout = AdminLayout;
                            // }
                            return (
                                <Route
                                    key={index}
                                    path={router.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
