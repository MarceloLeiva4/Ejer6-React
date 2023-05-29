import { Card, Form, Button } from 'react-bootstrap';
import ListColor from './ListColor';
import { useState, useEffect } from 'react';

const FormColor = () => {
  let colorLocalStorage =
    JSON.parse(localStorage.getItem('listaColores')) || [];
  const [color, setColor] = useState('');
  const [listaColores, setListaColores] = useState(colorLocalStorage);

  useEffect(() => {
    localStorage.setItem('listaColores', JSON.stringify(listaColores));
  }, [listaColores]);

  const handleSubmit = (event) => {
    event.preventDefault();
    agregarColor(color);
  };

  const agregarColor = (color) => {
    setListaColores([...listaColores, color]);
    setColor('');
  };

  const borrarColor = (nombreColor) => {
    let _listaColores = listaColores.filter((item) => item !== nombreColor);
    setListaColores(_listaColores);
  };
  return (
    <>
      {/* Agrego una card */}
      <Card>
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase display-6 fw-bold">
            Administrar Colores
          </Card.Title>
          {/* Agrego un formulario  */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="inputColor">
              <Form.Label className="display-6">Ingrese un color:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un color como por ej: Blue"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Agregar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ListColor listaColores={listaColores} borrarColor={borrarColor} />
    </>
  );
};

export default FormColor;