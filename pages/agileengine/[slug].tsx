/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import Image from 'next/image';
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
import MainContainer from '../../components/mainContainer';
// Services
import AgileEngineService from '../../services/agileengine';
// Styles
import ImagesGrid from '../../styles/ImagesGrid.module.scss';

interface ContextInterface {
  query: {
    slug: string
  }
};

interface ImageDetailItemInterface {
  id: string,
  author: string,
  camera: string,
  tags: string,
  cropped_picture: string,
  full_picture: string
};

interface ImageDetailProps {
  picture?: ImageDetailItemInterface | null
};

const ImageDetail = (props: ImageDetailProps) => {
  const { picture } = props;
  return (
    <MainContainer>
      <h1>Image detail</h1>
      {picture && (
        <div
          className={ImagesGrid.imageDetailBlock}
        >
          <Image
            src={picture.full_picture}
            alt={picture.author}
            width={800}
            height={800}
          />
          <div className={ImagesGrid.detail}>
            <p>{picture.author}</p>
            <p>{picture.camera}</p>
            <p>{picture.tags}</p>
          </div>
        </div>
      )}
      
    </MainContainer>
  );
};

ImageDetail.getInitialProps = async (context:ContextInterface) => {
  const { query: { slug: pid }} = context;
  const picture = await AgileEngineService.getImageDetail(pid);
  return { picture };
}

export default ImageDetail;