import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { list } from "./constants/list";
function App() {
    const [current, setCurrent] = useState<string>("");
    const clickHandler = () => {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                setCurrent(randomItem(list));
            }, 100 * i);
        }
    };
    return (
        <div>
            {
                // make title of page
            }
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                >
                    Random hehehe
                </h1>
            </div>
            <div
                style={{
                    position: "absolute",
                    textAlign: "center",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Button variant="contained" onClick={clickHandler}>
                    Ấn vào đây để random nè
                </Button>
                <div
                    style={{
                        marginTop: "20px",
                        color: "green",
                    }}
                >
                    <h2>{current}</h2>
                </div>
            </div>
        </div>
    );
}

const randomItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
export default App;
