import { redirect } from 'next/navigation'
export default function Page() {
    async function login() {
        'use server'
        redirect('/home')
    }
    return (
            <form action={login} style={{padding: 10}}>
                <label htmlFor="name">用户名:</label>
                <input type="text" id="name" placeholder="用户名" />
                <br/>
                <label htmlFor="password">密码:</label>
                <input type="password" id="password" placeholder="用户名" />
                <br/>
                <button type="submit">登录</button>
            </form>
    )
}
