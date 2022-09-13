import Home from '~/page/Home'
import Company from '~/page/Company'
import ViewQuestion from '~/page/ViewQuestion'
import Blog from '~/page/Blog'

import config from '~/config'

const publicRouter = [
    { path: config.router.home, component: Home },
    { path: config.router.company, component: Company },
    { path: config.router.viewQuestion, component: ViewQuestion },
    { path: config.router.blog, component: Blog }
]

const privateRouter = [

]

export {
    publicRouter,
    privateRouter
}