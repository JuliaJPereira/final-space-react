import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import { Home } from 'pages/Home';
import { CharacterDetails } from 'pages/CharacterDetails/CharacterDetails';

export const Routes: React.FC = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>}/>
                <Route path="/character/:id" element={<CharacterDetails/>}/>
            </Switch>
        </BrowserRouter>
    );
}