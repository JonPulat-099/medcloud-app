export default ({ app: { $auth }, error, redirect, route }) => {
  // if (route.path == '/courseapp' || route.path == '/courseapp/') {
  //   redirect('/courseapp/welcome')
  // }

  if (route.path.includes('courseapp') || route.path.includes('cabinet')) {
    if (!$auth.loggedIn) {
      redirect("/login")
    }
  }
}
