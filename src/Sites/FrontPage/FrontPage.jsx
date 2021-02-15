import react from 'react';
import { Newest } from '../../Components/Newest/Newest';
import { News } from '../../Components/News/News';
import { Newsletter } from '../../Components/Newsletter/Newsletter';
import { Slider } from "../../Components/Slider/Slider";

export function FrontPage() {

    return (
        <main>
            <Slider />
            <News />
            <Newsletter />
            <Newest />
        </main>
    )
} 