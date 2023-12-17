import { ReactNode } from "react";
import styles from "../../styles/modal.module.css";
import { X } from "lucide-react";

const Modal = (props: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {

    const handleContent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    
  return (
    props.open && (
      <div className={styles.modal} onClick={props.onClose}>
        <div className={styles.modal_content} onClick={handleContent}>
          <div onClick={props.onClose} className={styles.close}>
            <X color="#ffffff" />
          </div>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Modal;
