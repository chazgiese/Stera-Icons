import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BriefcaseRegular } from './BriefcaseRegular.js';
import { BriefcaseRegularDuotone } from './BriefcaseRegularDuotone.js';
import { BriefcaseBold } from './BriefcaseBold.js';
import { BriefcaseBoldDuotone } from './BriefcaseBoldDuotone.js';
import { BriefcaseFill } from './BriefcaseFill.js';
import { BriefcaseFillDuotone } from './BriefcaseFillDuotone.js';

export interface BriefcaseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Briefcase - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BriefcaseRegular } from 'stera-icons/icons/BriefcaseRegular';
 */
const Briefcase = memo(forwardRef<SVGSVGElement, BriefcaseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BriefcaseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BriefcaseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BriefcaseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BriefcaseFill ref={ref} {...rest} />;
  if (duotone) return <BriefcaseRegularDuotone ref={ref} {...rest} />;
  return <BriefcaseRegular ref={ref} {...rest} />;
}));

Briefcase.displayName = 'Briefcase';

// Triple export pattern (lucide-react style)
export { Briefcase, Briefcase as BriefcaseIcon, Briefcase as SiBriefcase };
export default Briefcase;
