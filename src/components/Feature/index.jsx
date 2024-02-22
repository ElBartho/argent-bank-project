import {} from './feature';
import { FeatureWrapper, FeatureIcon, FeatureTitle } from './feature';

const Feature = ({ feature }) => {
  return (
    <FeatureWrapper>
      {feature && (
        <>
          <FeatureIcon src={feature.image} alt={feature.alt} />
          <FeatureTitle>{feature.title}</FeatureTitle>
          <p>{feature.text}</p>
        </>
      )}
    </FeatureWrapper>
  );
};

export default Feature;
