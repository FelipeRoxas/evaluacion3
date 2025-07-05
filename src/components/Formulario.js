import React, { useState, useEffect } from "react";

function Formilario({ eventos, setEventos}) {
    const [event, setEvento] = useState({
        nombre: '',
        asistentes: '',
        tipo: '',
        descripcion: '',
        fecha: ''
    })

    const [modoEdicion, setModoEdicion] = useState(false);
    const [idEdicion, setIdEdicion] = useState(null);

    const handleChange = (e) => {
        setEvento({
          ...eventos,
          [e.target.name]: e.target.value  
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!eventos.nombre || !eventos.tipo || !eventos.fecha) return alert('Completa todos los campos obligatorios');

        if (modoEdicion) {
            const nuevosEventos = eventos.map((ev, index)) =>
                index === idEdicion ? evento : ev
        );
        setEventos(nuevosEventos);
        setModoEdicion(false);
        setIdEdicion(null);
        } else {
            setEventos([...eventos, evento]);
        }

        setEvento({
            nombre: '',
            asistentes: '',
            tipo: '',
            descripcion: '',
            fecha:''
        });
    };


    useEffect(() => {
        if (modoEdicion && idEdicion !== null) {
            setEvento(eventos[idEdicion]);
        }
    }, [modoEdicion, idEdicion]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>{modoEdicion ? 'Editar Evento' : 'Registrar Evento'}</h2>

            <input type="text" name="nombre" placeholder="Nombre del evento" value={evento.nombre} onChange={handleCange} required />
            <input type="number"name="asistentes" placeholder="N° Asistentes" value={evento.asistentes} onChange={handleChange} />

            <select name="tipe" value={evento.tipo} onChange={handleChange} required>
                <option value="">Seleccione tipo</option>
                <option value="Reunion">Runion</option>
                <option value="Charla">Charla</option>
                <option value="Actividad social">Actividad social</option>
            </select>

        </form>
    )
}