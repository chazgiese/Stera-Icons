import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BriefcaseRegular } from './BriefcaseRegular';
import { BriefcaseRegularDuotone } from './BriefcaseRegularDuotone';
import { BriefcaseBold } from './BriefcaseBold';
import { BriefcaseBoldDuotone } from './BriefcaseBoldDuotone';
import { BriefcaseFill } from './BriefcaseFill';
import { BriefcaseFillDuotone } from './BriefcaseFillDuotone';

export interface BriefcaseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Briefcase with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BriefcaseRegular } from 'stera-icons/BriefcaseRegular';
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

export { Briefcase };
