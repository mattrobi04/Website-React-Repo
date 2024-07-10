import UserGreeting from './UserGreeting.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import List from './List.jsx';
import MoveSquare from './Square/MoveSquare.jsx';
import StateTutorial from './Button/hookButtonTest.jsx';
import ReducerTutorial from './ReducterHook.jsx';
import EffectTutorial from './EffectTutorial.jsx';
import RefTutorial from './RefTutorial.jsx';
import LayoutEffectTutorial from './LayoutEffectTutorial.jsx';

function App() {
  
  return(
    <>
      <RefTutorial/>
      <br></br>
      <UserGreeting isLoggedIn={true} username="mattrobi04"></UserGreeting>
      <Card/>
      <Button/>
      <MoveSquare />
      <Student name="Michael" age={30} isStudent={false}/> 
      <ReducerTutorial/>

      <Student name="George" age={40} isStudent={true}/>
      <LayoutEffectTutorial/>
      <List/>
      <Student/> 
      <StateTutorial/>
      <Footer/>

      <EffectTutorial/>
    </>
  );
}

export default App
