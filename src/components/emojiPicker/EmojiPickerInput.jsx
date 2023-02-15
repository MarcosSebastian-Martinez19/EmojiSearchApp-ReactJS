import React from "react";
import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";
import styles from "./EmojiPicker.module.scss"

const EmojiPickerInput = () => {
    const refInput = useRef(null);
    
    return (
        <div>
            <input className={styles.input} ref={refInput} />
            <EmojiPicker ref={refInput} />
        </div>
    )
};

export default EmojiPickerInput;
