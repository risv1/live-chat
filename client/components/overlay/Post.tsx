import styles from "../../styles/modal.module.css";
import Modal from "./Modal";

const Post = (props: { open: boolean, onHandleClose: () => void }) => {
    return (
            <Modal open={props.open} onClose={props.onHandleClose}>
                  <textarea
                    placeholder=" What is happening?!"
                    className={styles.textarea}
                    rows={2}
                    cols={3}
                />
            </Modal>  
    );
};

export default Post;

  