import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { ReactNode } from "react";

// this dialog we toke it from headless ui library
interface iprop {
  isOpen: boolean;
  title?: string;
  close: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, title, close, children }: iprop) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-xl font-medium uppercase text-black"
                >
                  {title}
                </DialogTitle>
              )}

              <p className="mt-2 text-sm/6 text-black"></p>
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
