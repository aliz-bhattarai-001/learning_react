import Header from "./components/Header"
import Footer from "./components/Footer"
import ContentArea from "./components/ContentArea"
// import Terminal from "./components/Terminal/Terminal.test.tsx"
import Terminal from "./components/Terminal/Terminal"
import LoginForm from "./components/forms"
import { Help, Fastfetch } from "./components/Terminal/terminal.commands"
import { commandList, fastfetchData } from "./components/Terminal/terminal.data"
// import type { CommandListProps } from "./terminal.types";

function App() {
  // All the main code goes within this block (the main app I'd say)
  return (

    <>
      <Header />
      <ContentArea />
      <Terminal />
      <LoginForm />
      <Help {...commandList} />
      {/* Or we can also use: <Help label={commandList.label} List={commandList.List} */}
      <Fastfetch label={fastfetchData.label} data={fastfetchData.data} />
      <Footer />
    </>
  )
}

export default App
