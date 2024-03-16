import { useAtom } from "jotai";
import { userAtom } from "../../Utils/Store";
import { deleteFolder } from "../../HandleApi/NotesApiHandler";
export const FolderDeletionModal = ({
  deleteFolderModal,
  setDeleteFolderModal,
  setSelectedNoteId,
  selectedFolderId,
  setSelectedFolderId,
}) => {
  const [user, setUser] = useAtom(userAtom);
  const deleteFolderHandler = async () => {
    setDeleteFolderModal(false);
    const response = await deleteFolder(
      selectedFolderId,
      user.auth0Id,
      user.token
    );
    if (response.success) {
      const updatedFolders = user.folders.filter(
        (folder) => folder._id !== selectedFolderId
      );
      setUser({ ...user, folders: updatedFolders });
      setSelectedFolderId(null);
      setSelectedNoteId(null);
    }
  };
  return (
    <>
      {deleteFolderModal && (
        <div
          onClick={() => setDeleteFolderModal(false)}
          className="absolute inset-0  flex items-center justify-center z-[11] popup-overlay"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="popup-content w-[90%] max-w-[30em] md:w-full px-8 py-10 rounded-lg border border-gray-500/40 absolute bg-[#0d1117] shadow-lg shadow-gray-800/20 z-[11] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <h1 className="font-bold text-2xl text-center">Delete Folder</h1>
            <p className="text-sm mx-auto font-medium text-gray-100/90 mt-2 text-center">
              Are you sure you want to delete this folder? All the notes inside
              this folder will also be deleted.
            </p>
            <div className="w-full flex justify-center gap-3 mt-4">
              <button
                onClick={() => setDeleteFolderModal(false)}
                className="border hover:bg-red-700 border-red-600 px-3 py-2 transition-colors rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={deleteFolderHandler}
                className="bg-red-600 hover:bg-red-700 transition-colors px-3 py-2 rounded-md text-sm"
              >
                Delete Folder
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};