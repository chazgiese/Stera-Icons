import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ImageLandscapeRegular } from './ImageLandscapeRegular';
import { ImageLandscapeRegularDuotone } from './ImageLandscapeRegularDuotone';
import { ImageLandscapeBold } from './ImageLandscapeBold';
import { ImageLandscapeBoldDuotone } from './ImageLandscapeBoldDuotone';
import { ImageLandscapeFill } from './ImageLandscapeFill';
import { ImageLandscapeFillDuotone } from './ImageLandscapeFillDuotone';

export interface ImageLandscapeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ImageLandscape with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ImageLandscapeRegular } from 'stera-icons/ImageLandscapeRegular';
 */
const ImageLandscape = memo(forwardRef<SVGSVGElement, ImageLandscapeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ImageLandscapeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ImageLandscapeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ImageLandscapeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ImageLandscapeFill ref={ref} {...rest} />;
  if (duotone) return <ImageLandscapeRegularDuotone ref={ref} {...rest} />;
  return <ImageLandscapeRegular ref={ref} {...rest} />;
}));

ImageLandscape.displayName = 'ImageLandscape';

export { ImageLandscape };
