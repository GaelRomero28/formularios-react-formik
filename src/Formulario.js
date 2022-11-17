import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {

	return (
		<>
			<Formik
				initialValues={{
					nommbre: "",
					correo: ""
				}}
				onSubmit={() => {
					console.log("Formulario Enviado!")
				}}
			>
				{({ values, handleSubmit, handleChange, handleBlur }) => (
					<form className='formulario' onSubmit={handleSubmit}>
						<div>
							<label htmlFor="nombre">Nombre:</label>
							<input
								type="text"
								id='nombre'
								name='nombre'
								placeholder='Gael Romero'
								value={values.nommbre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						<div>
							<label htmlFor="correo">Correo:</label>
							<input
								type="email"
								id='correo'
								name='correo'
								placeholder='alguien@example.com.mx'
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						<button type='submit'>Enviar</button>
					</form>
				)}
			</Formik>
		</>
	);
}

export default Formulario;