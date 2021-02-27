import { Button } from "../Button/Button";
import './Buttons';

export const Buttons = ({callBackList}) => {
    return(
      <div>
          <Button text='Empezar' callBack={callBackList[0]}/>
          <Button text='Parar' callBack={callBackList[1]}/>
          <Button text='Resetear' callBack={callBackList[2]}/>
      </div>
    )
}