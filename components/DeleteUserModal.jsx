import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function DeleteUserModal({ open, setUsers, setOpen, user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const refresh = () => {
    const currentPath = router.pathname;
    router.push({
      pathname: currentPath,
      query: {
        ...router.query,
      },
    });
  };
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`/api/user/${user?._id}`)
      .then(function (res) {
        setLoading(false);
        setOpen(false);
        toast.success(res.data.message);
        // refresh();
        setUsers((x) => x.filter((y) => y._id !== user._id));
      })
      .catch(function (err) {
        setLoading(false);
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err.message);
        }
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[3201]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[28rem] sm:p-6">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to Delete{" "}
                          <span className=" font-bold">
                            {user?.lastName} {user?.firstName}
                          </span>
                          &nbsp; account? All of this user&apos;s data will be
                          permanently removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 w-full flex gap-5 sm:flex-row-reverse sm:px-6">
                  <LoadingButton
                    type="button"
                    color="error"
                    variant="contained"
                    loading={loading}
                    disabled={loading}
                    onClick={handleDelete}
                  >
                    Deactivate
                  </LoadingButton>
                  <Button
                    type="button"
                    variant="outlined"
                    color="info"
                    disabled={loading}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
