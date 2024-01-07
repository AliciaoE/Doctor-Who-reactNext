import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

test('encuentra las imágenes en el Carousel', () => {
  render(<Carousel />);
  
  // Asegúrate de que la primera imagen esté presente
  const imagen = screen.getByAltText('Imagen 1');
  expect(imagen).toBeInTheDocument();
  expect(imagen).toHaveClass('my-carousel-image'); 

});
