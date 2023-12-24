import { useModal } from "../recent-section/ModalContext";
import Modal from "./Modal"

const Message = () => {

    const { isModalOpen, closeModal } = useModal();

    return(
        <Modal open={isModalOpen} onClose={closeModal}>
            <h1 className="text-white">Hello message open</h1>
        </Modal>
    )
}

export default Message;