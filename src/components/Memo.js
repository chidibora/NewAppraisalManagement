import React from 'react'
import Finalized from './Finalized';
import Generated from "./Generated";
import Outstanding from './Outstanding';
import Review from './Review';

function Memo() {
    return (
        <div>
            <Generated />
            <Review title="Memos awaiting Review" number="3" />
            <Outstanding title="Outstanding Memo"  number="39" />
            <Finalized title="Finalized Memo" number="125"/>
        </div>
    )
}

export default Memo
