import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImagePileRegular } from './ImagePileRegular';
import { ImagePileRegularDuotone } from './ImagePileRegularDuotone';
import { ImagePileBold } from './ImagePileBold';
import { ImagePileBoldDuotone } from './ImagePileBoldDuotone';
import { ImagePileFill } from './ImagePileFill';
import { ImagePileFillDuotone } from './ImagePileFillDuotone';

export interface ImagePileProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImagePile with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ImagePileRegular } from 'stera-icons/ImagePileRegular';
 */
const ImagePile = memo(forwardRef<SVGSVGElement, ImagePileProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImagePileBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImagePileBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImagePileFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImagePileFill ref={ref} {...rest} />;
  if (duotone) return <ImagePileRegularDuotone ref={ref} {...rest} />;
  return <ImagePileRegular ref={ref} {...rest} />;
}));

ImagePile.displayName = 'ImagePile';

export { ImagePile };
