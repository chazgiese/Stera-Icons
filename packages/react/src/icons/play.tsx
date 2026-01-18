import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayRegular } from './PlayRegular';
import { PlayRegularDuotone } from './PlayRegularDuotone';
import { PlayBold } from './PlayBold';
import { PlayBoldDuotone } from './PlayBoldDuotone';
import { PlayFill } from './PlayFill';
import { PlayFillDuotone } from './PlayFillDuotone';

export interface PlayProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Play with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PlayRegular } from 'stera-icons/PlayRegular';
 */
const Play = memo(forwardRef<SVGSVGElement, PlayProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlayBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlayBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlayFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlayFill ref={ref} {...rest} />;
  if (duotone) return <PlayRegularDuotone ref={ref} {...rest} />;
  return <PlayRegular ref={ref} {...rest} />;
}));

Play.displayName = 'Play';

export { Play };
