import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Modal,
    Box,
    Typography,
} from "@mui/material";
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
    const [isAll, setIsAll] = useState<boolean>(true);
    const [isMale, setIsMale] = useState<boolean>(false);
    const [isFemale, setIsFemale] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const clickHandler = () => {
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                setCurrent(
                    randomItem(
                        filterList(list, isAll, isMale, isFemale).map(
                            (item) => item.name
                        )
                    )
                );
            }, 100 * i);
        }
        setTimeout(() => {

        handleOpen();
        }, 2500);
    };
    const checkBoxHandler = (e: any) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            console.log(e.target.name);
            if (e.target.name === "all") {
                setIsAll(true);
                setIsMale(false);
                setIsFemale(false);
            } else if (e.target.name === "male") {
                setIsAll(false);
                setIsMale(true);
                setIsFemale(false);
            } else if (e.target.name === "female") {
                setIsAll(false);
                setIsMale(false);
                setIsFemale(true);
            }
        } else {
            setIsAll(false);
            setIsMale(false);
            setIsFemale(false);
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
                <div>
                    <FormGroup>
                        <FormControlLabel
                            disabled={isMale || isFemale}
                            checked={isAll}
                            onChange={checkBoxHandler}
                            control={
                                <Checkbox
                                    inputProps={{
                                        name: "all",
                                    }}
                                />
                            }
                            label="Tất cả"
                        />
                        <FormControlLabel
                            onChange={checkBoxHandler}
                            disabled={isAll || isFemale}
                            control={
                                <Checkbox
                                    inputProps={{
                                        name: "male",
                                    }}
                                />
                            }
                            label="Nam"
                        />
                        <FormControlLabel
                            disabled={isAll || isMale}
                            onChange={checkBoxHandler}
                            control={
                                <Checkbox
                                    inputProps={{
                                        name: "female",
                                    }}
                                />
                            }
                            label="Nữ"
                        />
                    </FormGroup>
                </div>
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

const filterList = (
    list: { name: string; gender: string; birthday: string }[],
    isAll: boolean,
    isMale: boolean,
    isFemale: boolean
) => {
    return list.filter((item) => {
        if (isAll) {
            return item;
        } else if (isMale) {
            return item.gender === "Nam";
        } else if (isFemale) {
            return item.gender === "Nữ";
        } else {
            return item;
        }
    });
};
export default App;
