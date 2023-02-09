import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { list } from "./constants/list";
import RandomName from "./components/RandomName";
import Footer from "./components/Footer";
import SpinName from "./components/SpinName";
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
    const [currentClass, setCurrentClass] = useState<string>("");
    const [form, setForm] = useState<string>("");
    const listClass = Object.keys(list);
    const formList = [
        {
            name: "spinname",
            label: "Spin name",
        },
        {
            name: "randomname",
            label: "Random name",
        },
    ];
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
                {currentClass === "" ? (
                    <h2
                        style={{
                            color: "red",
                        }}
                    >
                        Vui lòng chọn lớp
                    </h2>
                ) : (
                    <div
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                        >
                            {formList.map((formName) => (
                                <Button
                                    key={formName.name}
                                    onClick={() => setForm(formName.name)}
                                    style={styleButton(form === formName.name)}
                                >
                                    {formName.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <div
                            style={{
                                marginTop: "20px",
                            }}
                        >
                            {chooseForm(form, currentClass)}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

const chooseForm = (form: string, currentClass: string) => {
    console.log(form)
    switch (form) {
        case "spinname":
            return <SpinName currentClass={currentClass} />;
        case "randomname":
            return <RandomName currentClass={currentClass} />;
        default:
            return <div></div>;
    }
};

export default App;
