export default ({ error, redirect, route }) => {
  if (route.path == '/courseapp' || route.path == '/courseapp/') {
    redirect('/courseapp/welcome')
  }
}
