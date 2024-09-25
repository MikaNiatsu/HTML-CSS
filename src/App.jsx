import { useState } from 'react'
import  SlideComponent  from './components/Presentacion'
import  ComponentExercises  from './components/Ejercicios'
function App() {
  const [isEnd, setIsActive] = useState(false);
  const handleStateChange = (newState) => {
    setIsActive(newState);
  };

  return (
    <>
      <main className="flex flex-col min-h-screen">
        {!isEnd && <SlideComponent onStateChange={handleStateChange} />}

        {isEnd && (
          <ComponentExercises />
        )}

      </main>
      
    </>
  )
}

export default App
