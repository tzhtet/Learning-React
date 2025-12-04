import Student from "./Student.jsx";

function App() {
  return(
    <>
    <Student name="KO KO Aung" age= {28} isStudent={true} />
    <Student name="Pa Pa Aung" age= {38} isStudent={false} />
    <Student name="Hla Hla Aung" age= {23} isStudent={false} />
    <Student name="Mya Mya Aung" age= {12} isStudent={false} />
    <Student name="Hay Mun Oo"/>
    </>
  );
}
export default App
