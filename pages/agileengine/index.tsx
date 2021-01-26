/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import Image from 'next/image';
import Link from 'next/link';
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
import MainContainer from '../../components/mainContainer';
// Services
import AgileEngineService from '../../services/agileengine';
// Styles
import ImagesGrid from '../../styles/ImagesGrid.module.scss';

interface AgileengineItemInterface {
  id: string,
  cropped_picture: string
};

interface AgileengineProps {
  pictures?: Array<AgileengineItemInterface> | null
};

const Agileengine = (props: AgileengineProps) => {
  const { pictures } = props;
  
  return (
    <MainContainer>
      <h1>Agileengine</h1>
      <div className={ImagesGrid.container}>
        {pictures && pictures.map(item => (
          <div key={item.id} className={ImagesGrid.imageItem}>
            <Link
              href={`/agileengine/${item.id}`}
            >
              <a>
                <Image
                  src={item.cropped_picture}
                  alt={`Agile engine picture ${item.id}`}
                  width={300}
                  height={300}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

Agileengine.getInitialProps = async () => {
  const pictures = await AgileEngineService.getImages();
  return { pictures };
}

export default Agileengine;