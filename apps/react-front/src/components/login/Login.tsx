import { Button, InputText, ItemIcon } from '@c18-04-m-node-react/front-components';
import { useContext } from 'react';
import { Context } from '../../context/Context'

function Login() {

  const {setMenuApp} = useContext(Context);

  return (
    <div className='bg-lightPurple flex flex-col justify-between items-center w-full h-[70%] min-h-[200px] md:w-1/2'>
      <div className="flex justify-center items-center h-1/6 w-4/5">
          <h2 className="text-yellow font-marce text-base sm:text-2xl">
            Login
          </h2>
        </div>
      <div className="flex flex-col justify-start items-center h-4/6 w-4/5">        
        <div className="flex justify-center gap-6 items-center h-1/6 w-full">
          <ItemIcon src="gm.svg"></ItemIcon>
          <InputText placeholder="Email"></InputText>
        </div>
        <div className="flex justify-center gap-6 items-center h-1/6 w-full">
          <ItemIcon src="pass.svg"></ItemIcon>
          <InputText placeholder="Password"></InputText>
        </div>
      </div>
      <div className='flex justify-center items-center w-4/5 h-1/6'>
        <div className='flex justify-center items-center gap-4 w-full h-full sm:justify-end sm:w-auto'>
          <Button onClick={() => setMenuApp(0)}>Cancel</Button>
          <Button>Enter</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
