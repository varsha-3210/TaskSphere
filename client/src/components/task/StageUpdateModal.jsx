import { Dialog } from "@headlessui/react";
import ModalWrapper from "../ModalWrapper";
import SelectList from "../SelectList";
import Button from "../Button";
import { useUpdateTaskMutation } from "../../redux/slices/api/taskApiSlice";
import { toast } from "sonner";
import { useState } from "react";

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];

const StageUpdateModal = ({ open, setOpen, task }) => {
  const [selectedStage, setSelectedStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
  const [updateTask] = useUpdateTaskMutation();

  const handleSubmit = async () => {
    try {
      const res = await updateTask({ _id: task._id, stage: selectedStage }).unwrap();
      toast.success(res.message);
      setTimeout(() => setOpen(false), 500);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <Dialog.Title className='text-base font-bold leading-6 text-gray-900 mb-4'>
        Update Task Stage
      </Dialog.Title>
      <div className='flex flex-col gap-6'>
        <SelectList
          label='Task Stage'
          lists={LISTS}
          selected={selectedStage}
          setSelected={setSelectedStage}
        />
        <div className='flex gap-4 mt-4'>
          <Button label="Submit" onClick={handleSubmit} className='bg-blue-600 text-white' />
          <Button label="Cancel" onClick={() => setOpen(false)} className='bg-white border' />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default StageUpdateModal;
