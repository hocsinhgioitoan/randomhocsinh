import { LoadingButton } from "@mui/lab";
import { Button} from "@mui/material";
import ModalWinner from "./ModalWinner";
import { useState } from "react";
import SyncIcon from "@mui/icons-material/Sync";
import { list } from '../constants/list';
export default function RandomName({ currentClass }: { currentClass: string }) {
    const [onSpin, setOnSpin] = useState<boolean>(false);
    const [current, setCurrent] = useState<string>("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const clickHandler = () => {
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

    return (
        <div>
            {onSpin ? (
                <LoadingButton
                    loading
                    loadingIndicator="Đang random..."
                    variant="text"
                    style={{
                        position: "relative",
                    }}
                ></LoadingButton>
            ) : (
                <Button
                    variant="contained"
                    onClick={clickHandler}
                    startIcon={<SyncIcon />}
                >
                    Ấn vào đây để random nè
                </Button>
            )}
            <ModalWinner open = {open} handleClose={handleClose} current={current} />
            <div
                style={{
                    marginTop: "20px",
                    color: "green",
                }}
            >
                <h2>{current}</h2>
            </div>
        </div>
    );
}
const randomItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
