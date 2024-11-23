import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = () => {

const newUser = { name, email };

addUser(newUser);
};

return (
<form>
<legend>Agregar Usuario</legend>
<div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Nombre usuario" aria-label="Nombre" aria-describedby="button-addon2"  value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" class="form-control" placeholder="Email usuario" aria-label="Email" aria-describedby="button-addon2"  value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button class="btn btn-primary" type="button" id="button-addon2" onClick={handleSubmit}> Agregar </button>
    </div>

</form>
  );
};

export default UserForm;