import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrophyRegular } from './TrophyRegular';
import { TrophyRegularDuotone } from './TrophyRegularDuotone';
import { TrophyBold } from './TrophyBold';
import { TrophyBoldDuotone } from './TrophyBoldDuotone';
import { TrophyFill } from './TrophyFill';
import { TrophyFillDuotone } from './TrophyFillDuotone';

export interface TrophyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Trophy - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TrophyRegular } from 'stera-icons/TrophyRegular';
 */
const Trophy = memo(forwardRef<SVGSVGElement, TrophyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrophyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TrophyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TrophyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TrophyFill ref={ref} {...rest} />;
  if (duotone) return <TrophyRegularDuotone ref={ref} {...rest} />;
  return <TrophyRegular ref={ref} {...rest} />;
}));

Trophy.displayName = 'Trophy';

// Triple export pattern (lucide-react style)
export { Trophy, Trophy as TrophyIcon, Trophy as SiTrophy };
