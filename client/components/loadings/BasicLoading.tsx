import React from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
    customText?: string
}

const Loading: React.FC<Props> = ({ customText }) => {
    return (
        <div className='flex-between align-center flex-column py-10'>
            <CircularProgress style={{ color: 'black' }} />
            <p style={{ margin: '1em 0' }}>{customText ? customText : 'Please Wait...'}</p>
        </div>
    );
};

export default Loading;
