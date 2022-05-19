import { forwardRef, useImperativeHandle, useState } from "react";
const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
      openModal: () => setModalState(true)
  }))

  console.log(`Child Modal Rendered`);

  if(!modalState) return;
  return (
    <div className="modal">
        <p>This is Modal</p>
        <button onClick={() => setModalState(false)}>Close</button>
    </div>
  )
}

export default forwardRef(Modal)