
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { messageAtom, networkAtom, notificationAtom } from './store/atoms/atom'
import { totalnotiselector } from './store/selector/selector';

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Mainapp/>
      </RecoilRoot>
    </div>
  )
  
}

function Mainapp(){
  const noticount = useRecoilValue(notificationAtom);
  const messagecount = useRecoilValue(messageAtom);
  const [networkcount, setnetworkcount] = useRecoilState(networkAtom);
  const totalnoti = useRecoilValue(totalnotiselector)

  return (
    <>

      <button>Home</button>

      <button>Notification({noticount >= 100 ? "99+" : noticount})</button>
      <button>Messages({messagecount})</button>
      <button>Network({networkcount})</button>

      <button>Me ({totalnoti})</button>
      <button onClick={()=>{
        setnetworkcount(c=>c+2)
      }}>Increase</button>

<button>Me</button>
      <button onClick={()=>{
        setnetworkcount(c=>c-2)
      }}>Decrease </button>


    </>
  )
}

export default App
