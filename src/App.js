import './App.css';
import Bikes from './components/Bikes'
import Clock from './components/Clock'
import Weather from './components/Weather'

const App = () => {
  const time = Number(new Date().toTimeString().substring(0, 2))
      var welcomeText = '';
    
      if (time >= 23 || time <= 3) {
        welcomeText = 'Hyvää yötä!';
      } else if (time >= 4 && time <= 10) {
        welcomeText = 'Hyvää huomenta!';
      } else if (time >= 11 && time <= 17) {
        welcomeText = 'Hyvää päivää!';
      } else if (time >= 18 && time <= 22) {
    welcomeText = 'Hyvää iltaa!';
  }

  const handleRefresh = () => {
    window.location.reload(false);
  }

  return (
    <div onClick={handleRefresh} style={{ margin: 'none'}}>
      <div className='grid-container'>
        <div className="grid-item item1"><Clock /><Bikes /></div>
        <div className="grid-item item2"><Weather /></div>
      </div>
      <div className="welcome"><div className='welcome-text'>{welcomeText}</div></div>
    </div>
  )
}
export default App;
