export default function ({ redirect, route }) {
  const token = localStorage.getItem('auth_token')
  if (token && route.path === '/') {
    return redirect('/dashboard')
  }
  if (!token && route.path !== '/') {
    return redirect('/')
  }
}
