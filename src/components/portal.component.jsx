import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './portal.module.css';

export function Portal({ onClickAway, children }) {
  const { current: modalRootElement } = useRef(document.getElementById('modal-root'));
  const { current: element } = useRef(document.createElement('div'));

  useEffect(() => {
    element.className = styles.portal;
    element.addEventListener('click', function (event) {
      if(event.target === element) {
        onClickAway();
      }
    });

    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }, [modalRootElement, element]);

  return createPortal(
    children,
    element
  );
}