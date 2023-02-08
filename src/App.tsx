import { Button, ButtonGroup, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { list } from "./constants/list";
const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
function App() {
    const [current, setCurrent] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [currentClass, setCurrentClass] = useState<string>("");
    const [selected, setSelected] = useState<{
        one: boolean;
        two: boolean;
        three: boolean;
    }>({
        one: true,
        two: false,
        three: false,
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const clickHandler = () => {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                // @ts-ignore
                setCurrent(randomItem(list[currentClass]));
            }, 100 * i);
        }
        setTimeout(() => {
            handleOpen();
        }, 2500);
    };
    const changeClass = (className: string) => {
        setCurrentClass(className);
    };
    const styleButton = (active: boolean) => {
        return {
            backgroundColor: active ? "#1976d2" : "white",
            color: active ? "white" : "black",
        };
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
                <div
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button
                            style={styleButton(selected.one)}
                            onClick={() => {
                                changeClass("10.9");
                                setSelected({
                                    one: true,
                                    two: false,
                                    three: false,
                                });
                            }}
                        >
                            10.9
                        </Button>
                        <Button
                            style={styleButton(selected.two)}
                            onClick={() => {
                                changeClass("10.11");
                                setSelected({
                                    one: false,
                                    two: true,
                                    three: false,
                                });
                            }}
                        >
                            10.11
                        </Button>
                        <Button
                            style={styleButton(selected.three)}
                            onClick={() => {
                                setSelected({
                                    one: false,
                                    two: false,
                                    three: true,
                                });
                                changeClass("11.4");
                            }}
                        >
                            11.4
                        </Button>
                    </ButtonGroup>
                </div>

                <Button variant="contained" onClick={clickHandler}>
                    Ấn vào đây để random nè
                </Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Chúc mừng!!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <b>{current}</b> đã được chọn
                        </Typography>
                    </Box>
                </Modal>
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
