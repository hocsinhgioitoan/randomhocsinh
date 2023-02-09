import { Button, ButtonGroup, Modal, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { list } from "./constants/list";
import SyncIcon from '@mui/icons-material/Sync';

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
    const [onSpin, setOnSpin] = useState<boolean>(false);
    const listClass = Object.keys(list);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const clickHandler = () => {
        if (!currentClass) {
            return setCurrent("Vui lòng chọn lớp");
        }
        setOnSpin(true);
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                // @ts-ignore
                setCurrent(randomItem(list[currentClass]));
            }, 100 * i);
        }
        setTimeout(() => {
            handleOpen();
            setOnSpin(false);
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
        <div
            style={{
                backgroundColor: "#f5f5f5",
            }}
        >
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                >
                    Random Tên học sinh
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
                        {listClass.map((className) => (
                            <Button
                                key={className}
                                onClick={() => changeClass(className)}
                                style={styleButton(currentClass === className)}
                            >
                                {className}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
                {onSpin ? (
                    <LoadingButton
                        loading
                        loadingIndicator="Đang random..."
                        variant="text"
                        style={{
                            position: "relative",
                        }}
                    >
                    </LoadingButton>
                ) : (
                    <Button variant="contained" onClick={clickHandler} startIcon = {<SyncIcon/>}>
                        Ấn vào đây để random nè
                    </Button>
                )}

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
            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h3>Created by: Hoàng Hải Anh (GC) </h3>
                <a
                    href="https://github.com/hocsinhgioitoan/randomhocsinh"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        textDecoration: "none",
                        color: "black",
                    }}
                >
                    <h3>Link github</h3>
                </a>
            </div>
        </div>
    );
}

const randomItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export default App;
