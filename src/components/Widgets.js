import React from 'react';
import './Widgets.css';
import moment from 'moment';
import InfoIcon from '@mui/icons-material/Info';


function Widgets({text, time}) {

    function timeDiff(d1, d2) {
        var diff = moment(d2,"DD/MM/YYYY HH:mm:ss").diff(moment(d1,"DD/MM/YYYY HH:mm:ss"));
        var hours = moment.duration(diff).asHours();
        if(hours < 24) {
            return parseInt(hours) + "h ";
        } else {
            return parseInt(hours / 24) + "d ";
        }
    }

  return (
    <div className='widgets'>
        <div className='widgets__container'>
            <div className='widgets__title'>
                <h4>LinkedIn News</h4>
                <InfoIcon fontSize="small"/>
            </div>
            <p className='widgets__text'>{text.substring(0, 40)}{text.length > 40 && <span>...</span> }</p>
            <p className='widgets__timeDiff'>{timeDiff("27/04/2022 16:17:33", "27/04/2022 22:45:33")} ago</p>
        </div>
    </div>
  )
}

export default Widgets