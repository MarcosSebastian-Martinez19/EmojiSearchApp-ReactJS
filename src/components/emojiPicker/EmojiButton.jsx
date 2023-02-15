import styles from "./EmojiPicker.module.scss";

const EmojiButton = ({ emoji, onClick }) => {
    function handleClick() {
        onClick(emoji);
    }

    return <button className={styles.emojiButton} onClick={handleClick}>{emoji.character}</button>
};

export default EmojiButton;
