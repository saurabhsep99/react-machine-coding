import { useState } from "react";
import Tabs from "./tabs";

function CustomTabs()
{

    return(
        <Tabs>
            <div title="Home">Home Page</div>
            <div title="About">About Page</div>
            <div title="Contact"> Contact Page</div>
            <div title="Story"> Story Page</div>

        </Tabs>
    )
}

export default CustomTabs;