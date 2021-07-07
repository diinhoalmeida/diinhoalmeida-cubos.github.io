import { useEffect, useRef, useState } from "react";

const modes = [
    {
        nome: "pomodoro",
    }
}]

function setupConfig() {
    return (
        <div className="containerConfig">
            <div className="configHeader">
                <h1>Settings</h1>
            </div>
            <div className="configTitle">
                <h2>TIME (MINUTES)</h2>
            </div>
            <div className="setupTime">
            <form>
                <label></label>
                <input type="number"></input>
            </form>    
            </div>
            <div></div>
            <div></div>
        </div>
    )
}