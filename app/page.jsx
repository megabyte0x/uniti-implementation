import Button from './components/Button';
export default function Home() {
  return (
    <>
      <h4>Potato Potata Presents</h4>
      <h1>A Better Way to Organize your Program</h1>
      <Button text="Programs" link="../joinProgram" />
      <Button text="Create Program" link="../createProgram" />
      {/* <Button text="Connect Wallet" /> */}
    </>
  )
}
