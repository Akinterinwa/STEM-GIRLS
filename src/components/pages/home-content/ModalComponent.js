import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your modal styles here
import PopUpImg from "../../../images/WHO-WE-ARE.png";

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Disable scrolling when the modal is open
      document.body.classList.add('modal-open');
    }, 3000); // Modal will display after 3 seconds

    return () => {
      clearTimeout(timer);
      // Re-enable scrolling when the modal is closed
      document.body.classList.remove('modal-open');
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Re-enable scrolling when the modal is closed
    document.body.classList.remove('modal-open');
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-background" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="text">
              <button className="close-button" onClick={closeModal}>Close</button>
              <h2>Wait! if you leave now you wont get 6 months free trial</h2>
              <p>Iure quasi quos nostrum debitis ipsam non libero in veniam doloribus adipisci </p>
              <div className="cta_popup">
                <button className='btn-1'>
                  check it out
                </button>
              </div>
            </div>
            <div className="pop_image">
              <img src={PopUpImg} alt='pop up'  />
            </div>
          </div>

        </div>
      )}
    </>
  );
}

export default ModalComponent;
