export default function ({store, redirect}) {
  if (store.state.profile === null) {
    return redirect('/')
  }
}
