import './App.css';

import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Homepage from './Homepage';
import Contact from './Routes-components/Contact.js'
import About from './Routes-components/About.js';
import Work from './Routes-components/Work.js';
import Professionalskills from './Routes-components/Professionalskills.js';
import Technicalskills from './Routes-components/Technicalskills.js';
function App() {
  return (
    <div >
       
      <BrowserRouter> 
           <Routes>
                  <Route  path='/' element={<Homepage/>} />
                  <Route  path='/contact' element={<Contact/>}/>
                  <Route  path='/about' element={<About/>}/>
                  <Route  path='/work' element={<Work/>}/>
                  <Route  path='/professionalskills' element={<Professionalskills/>}/>
                  <Route  path='/technicalskills' element={<Technicalskills/>}/>
            </Routes> 
       </BrowserRouter>

        
    </div>
  );
}

export default App;
