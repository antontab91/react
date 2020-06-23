import React from 'react';

const Mailbox = ({ mailBoxCount }) => {
    return (
        <div className="mailbox">
            <span className="mailbox__text">Mailbox</span>
            {
                mailBoxCount.length > 0 && (
                    <span className="mailbox__count">{mailBoxCount.length}</span>
                )
            }
        </div>
    )
}

export default Mailbox;