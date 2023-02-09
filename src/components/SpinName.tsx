import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    Button,
} from "@mui/material";
import { randomItem } from "../functions";
import { list } from "../constants/list";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import SyncIcon from "@mui/icons-material/Sync";
export default function SpinName({ currentClass }: { currentClass: string }) {
    // @ts-ignore
    const listName = list[currentClass];
    const [_listName, setListName] = useState<
        [string, string, string, string, string]
    >(["", "", "", "", ""]);
    const [onSpin, setOnSpin] = useState<boolean>(false);
    const names: string[] = [];
    const clickHandler = () => {
        setOnSpin(true);
        for (let i = 0; i < 20; i++) {
            names.push(randomItem(listName));
        }
        for (let i = 0; i < names.length; i++) {
            setTimeout(() => {
                setListName([
                    names[i - 4],
                    names[i - 3],
                    names[i - 2],
                    names[i - 1],
                    names[i],
                ]);
            }, 1000 * i);
        }
        setTimeout(() => {
            setOnSpin(false);
        }, 20000);
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{_listName[0]}</TableCell>
                            <TableCell align="center">{_listName[1]}</TableCell>
                            <TableCell
                                align="center"
                                style={{
                                    color: "red",
                                }}
                            >
                                {_listName[2]}
                            </TableCell>
                            <TableCell align="center">{_listName[3]}</TableCell>
                            <TableCell align="center">{_listName[4]}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            {}
        </div>
    );
}
