import Header from "./components/Header"
import Footer from "./components/Footer"
import ContentArea from "./components/ContentArea"
// import Terminal from "./components/Terminal/Terminal.test.tsx"
import Terminal from "./components/Terminal/Terminal"
import LoginForm from "./components/forms"


function App() {
  // All the main code goes within this block (the main app I'd say)
  return (

    <>
      <Header />
      <ContentArea />
      <Terminal />
      <LoginForm />
      <Footer />
    </>
  )
}

export default App
