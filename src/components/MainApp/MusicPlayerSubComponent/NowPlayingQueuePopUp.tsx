import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
const NowPlayingQueuePopUp = (props: any) => {
    return (
        <Modal show={props.showNowPlayingQueuePopup}>
            <ModalHeader>
                <ModalTitle>Now Playing (00/00)</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div style={{overflow: "auto", height: "50vh"}}>
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                    Huh
                    <br />
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={() => props.setshowNowPlayingQueuePopup(false)}>Close</button>
            </ModalFooter>
        </Modal>
    );
};

export default NowPlayingQueuePopUp;
