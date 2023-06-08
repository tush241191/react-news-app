import React, {ReactNode, useEffect} from 'react'
import ReactDOM from 'react-dom'
import FocusLock from 'react-focus-lock'
import {useEventListener} from 'usehooks-ts'

import CloseIcon from '../icons/CloseIcon'

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
}

interface BackdropProps {
  onClick: () => void;
}

const Backdrop = ({onClick}: BackdropProps) =>
  <div
    className="fixed w-full h-full top-0 left-0 opacity-30 bg-black z-[100]"
    onClick={onClick}
  />

const Modal = ({visible, onClose, className, children}: ModalProps) => {
  // Disable main content scrolling when open
  useEffect(() => {
    visible
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'unset'
  }, [visible])

  // Close when pressing ESC
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && visible) {
      onClose()
    }
  }

  useEventListener('keydown', onKeyDown)

  const renderModal = () =>
    <>
      <Backdrop onClick={onClose} />
      <FocusLock>
        <div
          aria-modal
          tabIndex={-1}
          role="dialog"
          className={`z-[110] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            className || ''
          }`}
        >
          {children}
        </div>
      </FocusLock>
    </>

  return visible ? ReactDOM.createPortal(renderModal(), document.body) : null
}

export interface ModalHeaderProps {
  headerText: string;
  onClose?: () => void;
}

const Header = ({headerText, onClose}: ModalHeaderProps) =>
  <div
    id="header"
    className="flex items-center justify-between w-full gap-4 mb-6"
  >
    <h2 className="text-2xl text-gray-800 leading-[42px] font-bold">
      {headerText}
    </h2>
    <button
      type="button"
      className="ml-auto focus:outline-none focus-visible:ring focus-visible:ring-transparent"
      data-dismiss="modal"
      aria-label="Close"
      onClick={onClose}
    >
      <CloseIcon />
    </button>
  </div>

Modal.Header = Header
export default Modal
