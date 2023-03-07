import Nav from "./Nav"

export default function MainLayout(props) {
  return (
    <>
      <Nav />
      {props.children}
    </>
  )
}
