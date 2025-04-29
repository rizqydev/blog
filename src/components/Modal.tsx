export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-10 flex min-h-screen items-center justify-center overflow-y-auto p-4 transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>
        <div
          className={`relative transform overflow-hidden rounded-md bg-white text-left shadow-md transition-all duration-300 sm:w-full sm:max-w-lg ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
