import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from './AppBar';
import DropDownMenu from './DropDownMenu';

export default function MainComponent(){
    return (
        <>
            <AppBar />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '80px', marginLeft: '50px' }}>
                <div style={{ marginRight: '20px' }}>
                    Select an option: 
                </div>
                <DropDownMenu />
            </div>
        </>
    );
    
    
    
    
}