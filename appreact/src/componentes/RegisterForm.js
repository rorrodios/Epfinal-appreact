import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';



const RegisterForm = () => {
    
    
    
    
    const { register, handleSubmit, formState: { errors }, watch } = useForm() 
    const customSubmit = (data) => {
        
        
        console.log(data);
        
        
        
        
    }
    

    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control {...register('name' )} type="email" placeholder="Enter Username" />
                
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Clave</Form.Label>
                <Form.Control {...register('pass1' )} type="password" placeholder="Clave" />
            </Form.Group>
            <Form.Group  className="mb-3" >
                <Form.Label>Repita su clave</Form.Label>
                <Form.Control {...register('pass2' )} type="password" placeholder="Repita su clave" />
            </Form.Group>
            
            
                <Button variant="primary" onClick={handleSubmit(customSubmit)}>
                    Registrar
                </Button>
            
    </Form>

    )
}

export default RegisterForm;