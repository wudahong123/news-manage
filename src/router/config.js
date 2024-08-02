import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'


const routes=[
    {
        path:"/index",
        component:Home
    },
    {
        path:"/center",
        component:Center
      },
      {
        path:"/user-manage/adduser",
        component:UserAdd
      },
]

export default routes