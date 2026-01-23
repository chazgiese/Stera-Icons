import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TallyMarksRegular } from './TallyMarksRegular.js';
import { TallyMarksRegularDuotone } from './TallyMarksRegularDuotone.js';
import { TallyMarksBold } from './TallyMarksBold.js';
import { TallyMarksBoldDuotone } from './TallyMarksBoldDuotone.js';
import { TallyMarksFill } from './TallyMarksFill.js';
import { TallyMarksFillDuotone } from './TallyMarksFillDuotone.js';

export interface TallyMarksProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TallyMarks - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TallyMarksRegular } from 'stera-icons/icons/TallyMarksRegular';
 */
const TallyMarks = memo(forwardRef<SVGSVGElement, TallyMarksProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TallyMarksBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TallyMarksBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TallyMarksFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TallyMarksFill ref={ref} {...rest} />;
  if (duotone) return <TallyMarksRegularDuotone ref={ref} {...rest} />;
  return <TallyMarksRegular ref={ref} {...rest} />;
}));

TallyMarks.displayName = 'TallyMarks';

// Triple export pattern (lucide-react style)
export { TallyMarks, TallyMarks as TallyMarksIcon, TallyMarks as SiTallyMarks };
export default TallyMarks;
