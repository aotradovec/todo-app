import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';

export function Modal({ onClickAway, children }) {
  const { current: modalRootElement } = useRef(document.getElementById('modal-root'));
  const { current: element } = useRef(document.createElement('div'));

  function handleElementClickEvent(event) {
    if (event.target === element) {
      onClickAway();
    }
  }

  useEffect(() => {
    element.classList.add(styles.wrapper);
    element.addEventListener('click', handleElementClickEvent);

    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }, [modalRootElement, element]);

  return createPortal(children, element);
}