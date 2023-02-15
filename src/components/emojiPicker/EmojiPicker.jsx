import { forwardRef, useEffect, useRef, useState } from "react";

import {data as listEmojis} from "./data";
import EmojiSearch from "./EmojiSearch";
import EmojiButton from "./EmojiButton";

import styles from "./EmojiPicker.module.scss"

const EmojiPicker = (props, inputRef) => {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(listEmojis);

    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener("click", e => {
            if(!containerRef.current.contains(e.target)) {
                setIsOpen(false);
                setEmojis(listEmojis);
            }
        })
    }, []);
    
    function handleClickOpen() {
        setIsOpen(!isOpen);
    }

    function handleSearch(e) {
        const q = e;
        
        if(!!q) {
            const search = emojis.filter((emoji) => {
                return (
                    emoji.unicodeName.toLowerCase().includes(q) ||
                    emoji.slug.toLowerCase().includes(q)
                )
            });
            
            setEmojis(search);
        } else {
            setEmojis(listEmojis);
        }
    }

    function handleOnClickEmoji(emoji) {
        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);
        
        inputRef.current.value = prev + emoji.character + next;
        inputRef.current.selectionStart = cursorPos + emoji.character.length;
        inputRef.current.selectionEnd = cursorPos + emoji.character.length;
        inputRef.current.focus();
    }
    // console.log(emojis)

    return (
        <div ref={containerRef} className={styles.inputContainer}>
            <button onClick={handleClickOpen} className={styles.emojiPickerButton}>😊</button>

            {isOpen ? (
                <div className={styles.emojiPickerContainer}>
                    <EmojiSearch onSearch={handleSearch} />
                    <div className={styles.emojiList}>
                        {emojis.map((emoji) => (
                            <EmojiButton key={emoji.character} emoji={emoji} onClick={handleOnClickEmoji} />))}
                    </div>
                </div>
            ) : ""}
        </div>
    )
};

export default forwardRef(EmojiPicker);