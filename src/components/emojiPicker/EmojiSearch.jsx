import { useState } from "react";
import styles from "./EmojiPicker.module.scss"

const EmojiSearch = ({onSearch}) => {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e.target.value);
    }
    return <input className={styles.search} type="text" onChange={handleChange} value={value} />
};

export default EmojiSearch;
