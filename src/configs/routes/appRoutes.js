import {
  NoteList,
  NoteCreate,
  NoteUpdate,
  NotFound 
} from '../../pages'

const appRoutes = [
  {
    id: 1,
    path: '/',
    component: <NoteList/>
  },
  {
    id: 2,
    path: '/create',
    component: <NoteCreate/>
  },
  {
    id: 3,
    path: '/update/:id',
    component: <NoteUpdate/>
  },
  {
    id: 0,
    path: '*',
    component: <NotFound/>
  }
]

export default appRoutes