import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import MoshHome from './MoshCourse/MoshHome'
import PersonalExperimentsHome from './PersonalExperiments/PersonalExperimentsHome'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'mosh',
                element: <MoshHome />,
            },
            {
                path: 'personal-experiments',
                element: <PersonalExperimentsHome />,
            },
        ],
    },
])

export default router
