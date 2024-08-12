
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import Card from '../Card';
import BotonCategoria from '../BotonCategoria';



const FrontendContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CategoryStyled = styled.section`
  /* Estilos de tu categoría */
`;

const CardsFrontendStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`;

// Componente que muestra los videos de la categoría "INNOVACIÓN Y GESTIÓN"
const InnoyGest = () => {

  // Obtener los videos filtrados por la categoría "INNOVACIÓN Y GESTIÓN" del contexto global
  const { videosListadosInnoyGest } = useGlobalContext();

  console.log('videosListados inova y gest', videosListadosInnoyGest);

  return (
    <FrontendContainer>
      <CategoryStyled>
        {/* Mostrar el botón de categoría "INNOVACIÓN Y GESTIÓN"  */}
        <BotonCategoria Categoria={'INNOVACIÓN Y GESTIÓN'}></BotonCategoria>
      </CategoryStyled>
      <CardsFrontendStyled>
        {/* Mapear los videos de la categoría "INNOVACIÓN Y GESTIÓN" y mostrarlos en tarjetas */}
        {videosListadosInnoyGest.map(video => (
          <Card key={video.id}
            src={video.ImagenURL}
            alt={`imgcard-${video.id}`}
            idVideo={video.id}
            Categoria={video.Categoria}
          />
        ))}
      </CardsFrontendStyled>
    </FrontendContainer>
  );
};

export default InnoyGest;