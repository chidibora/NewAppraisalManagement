import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {IoIosSettings} from 'react-icons/io';
//import TextareaInput from '../inputs/TextareaInput';
import TextInput from '../inputs/TextInput';
import FormDateInput from '../inputs/FormDateInput';

const NewRoleForm = ({ closeModal, details }) => {
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [formType, setFormType] = useState('');

  useEffect(() => {
    if (details.id && details.id) {
      setFormType('edit');
      setRole(details.role);
      setDescription(details.description);
    } else {
      setFormType('create');
    }
  }, [details]);

  const submitForm = () => {
    console.log('Work in Progress...');
    closeModal();
  };

  return (
    <div className="overlay">
      <IoMdClose className="close-btn pointer" onClick={closeModal} />
      <div className="modal-box max-w-400">
        <div className="content">
          <TextInput
            name="role"      
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-100 m-b-10"
            label="Activity"
          />
          <div className="row">
              <div className="col-6 no-margin">
          <FormDateInput
            name="description"         
            onChange={(e) => setDescription(e.target.value)}
            className="w-100 m-b-10"
            label="Start Date"
          />
          </div>
         
            <div className="col-6 no-margin">        
          <FormDateInput
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-100 m-b-10"
            label="End Date"
          />
          </div>
          
           </div>
          <button
            type="button"
            className="btn btn-large w-100"
            onClick={submitForm}
          >
            {`${formType === 'create' ? 'Create' : 'Submit'} Activity`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRoleForm;
