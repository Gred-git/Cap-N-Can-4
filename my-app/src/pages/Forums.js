import React, {useState} from "react";

import './Forums.css';
import AccordionRow from "../components/AccordionRow/AccordionRow";
import ForumButtons from "../components/ForumButtons/ForumButtons";
import ForumSwitch from "../components/ForumSwitch/ForumSwitch";

 
const Forums = () => {

    const [activeState, setActiveState] = useState('Forums');

    const handleStateChange = (state) => {
      setActiveState(state);
    };

    return (

        <div className="Forums">

        <header className="Forums-header">

            <p> Welcome to Cap N' Can Forums ! </p>

            <ForumSwitch activeState={activeState} onStateChange={handleStateChange} />

            <ForumButtons />

            <header className='Accordion-header'>

                <AccordionRow
                    title="Forum 1"
                    upvotes={10}
                    isActive={activeState === 'Forums'}
                    >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet.
                    </p>
                    <input type="text" placeholder="Enter your comment" />
                    <button type="submit">Submit</button>
                </AccordionRow>

                <AccordionRow
                    title="Forum 1"
                    upvotes={10}
                    isActive={activeState === 'Forums'}
                    >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet.
                    </p>
                    <input type="text" placeholder="Enter your comment" />
                    <button type="submit">Submit</button>
                </AccordionRow>

                <AccordionRow
                    title="Forum 1"
                    upvotes={10}
                    isActive={activeState === 'Forums'}
                    >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet.
                    </p>
                    <input type="text" placeholder="Enter your comment" />
                    <button type="submit">Submit</button>
                </AccordionRow>

            </header>

        </header>

        </div>
    );
};
 
export default Forums;