import React from "react";
import "../styles/components/Form.css";
import InputField from "./InputField";
import {useForm} from "react-hook-form"

function Form(){
    const{
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();

    const onSubmit = () =>{
        window.alert("Enviado Correctamente")
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-row">
                <InputField 
                label="Nombre"
                type="text"
                placeholder="Naruto"
                {...register("nombre", {required: "Este campo es obligatorio",
                                        pattern: {
                                             value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, 
                                             message: "No se permiten números ni caracteres especiales"
                                        }
                })}
                error={errors.nombre?.message as string}
                />

                <InputField 
                label="Apellido"
                type="text"
                placeholder="Uzumaki"
                {...register("apellido" , {required: "Este campo es obligatorio",
                                            pattern: {
                                            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, 
                                            message: "No se permiten números ni caracteres especiales"
                                        }
                })}
                error={errors.apellido?.message as string}
                />
            </div>

            <InputField 
                label="Email"
                type="text"
                placeholder="Naruto@email.com"
                {...register("email", {required: "Este campo es obligatorio",
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "El correo no es válido",
                    }
                })}
                error={errors.email?.message as string}
            />

            <InputField 
                label="Asunto"
                type="text"
                placeholder="Cuentanos acérca de tu proyecto"
                {...register("asunto", {required: "Este campo es obligatorio"})}
                error={errors.asunto?.message as string}
            />

            <div className="form-group" >
                <label>Mensaje</label>
                <textarea placeholder="Cuéntanos acerca de tu proyecto..." 
                {...register("Acerca de tú proyecto",{required:"Este campo es obligatorio"})}
                ></textarea>
                
            </div>
            <button type="submit" className="submit-button">
                Enviar mensaje 
            </button>
            <p className="form-footer">
                Al enviar este mensaje aceptas nuestra <strong>política de tratamiento de datos personales</strong>
            </p>
        </form>
    )
}

export default Form;