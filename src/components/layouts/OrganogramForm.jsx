import React from 'react';
import { IoMdClose } from 'react-icons/io';
import FormDateInput from '../inputs/FormDateInput';
//import FormSearchInput from '../inputs/FormSearchInput';
import TextInput from '../inputs/TextInput';

const OrganogramForm = ({ closeModal }) => {
  const submitForm = () => {
    console.log('Work in Progress...');
  };

  return (
    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={closeModal} />
      <div className="modal-box max-w-400">
        <div className="content">          
        <TextInput className="w-100 m-b-10" label="Activity" />
        <div className="row">
            <div className="col-6 no-margin">
              <FormDateInput className="w-100 m-b-10" label="Start Date" />
            </div>
            <div className="col-6 no-margin">
            <FormDateInput className="w-100 m-b-10" label="End Date" />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-large w-100"
            onClick={submitForm}
          >
            Create Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganogramForm;
