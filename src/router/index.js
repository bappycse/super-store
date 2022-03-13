
import Hello from '../components/views/Hello'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'
import Items from '../components/views/Items'

export const routes = [
    {
        path: '/',
        component: Inventory
    },
    {
        path: '/items/:id',
        component: Items
    }
]