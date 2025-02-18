import shortlyLogo from './assets/shortly-logo.svg'
import PrimaryButton from './components/ui/buttons/PrimaryButton'

const App = () => {

  return (
    <>
      <img src={shortlyLogo} alt="Shortly logo"/>
      <PrimaryButton action={() => alert('Hola mundo')} label='Shorten'/>
    </>
  )
}

export default App
