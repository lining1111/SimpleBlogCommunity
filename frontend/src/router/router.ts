import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '@/views/Login';
import Register from '@/views/Register';
import MainFrame from '@/views/MainFrame';
import Publish from '@/views/Publish';
import Myself from '@/views/Myself';
import Others from '@/views/Others';
import Detail from '@/views/Detail';
import Update from '@/views/Update';

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: "/login",
                component: Login
            },
            {
                path: "/register",
                component: Register
            },
            {
                path: "/",
                component: MainFrame
            },
            {
                path: "/publish",
                component: Publish
            },
            {
                path: "/myself",
                component: Myself
            },
            {
                path: "/others",
                component: Others
            },
            {
                path: "/detail",
                component: Detail
            },
            {
                path: "/update",
                component: Update
            },
        ]
    }
)

export default router