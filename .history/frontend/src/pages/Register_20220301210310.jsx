import { useState } from 'react'



function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} from fromData()
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
}

export default Register;
