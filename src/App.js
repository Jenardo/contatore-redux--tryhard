import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Components import
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import Multi from './components/MultiplyBtn';
import InputM from './components/InputMulty';

function App() {
  return (
    <div className="App">
      <Input />
      <Button name="+" isIncrement />
      <Button name="-" />
      <Label value={0} />
      <div className="container">
        <div className="row justify-content-center">
          <InputM />
          <Multi name="x" />
        </div>
      </div>
    </div>
  );
}

export default App;
