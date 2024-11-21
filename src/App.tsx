import './App.css'
import DatePicker from './modules/shared/components/date-picker.component'

function App() {

  return (
    <div className="h-screen w-screen grid place-content-center">
      <DatePicker daysAvailable={[1,2,3,4,5]} />
    </div>
  )
}

export default App
