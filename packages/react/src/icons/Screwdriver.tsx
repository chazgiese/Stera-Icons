import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScrewdriverRegular } from './ScrewdriverRegular';
import { ScrewdriverRegularDuotone } from './ScrewdriverRegularDuotone';
import { ScrewdriverBold } from './ScrewdriverBold';
import { ScrewdriverBoldDuotone } from './ScrewdriverBoldDuotone';
import { ScrewdriverFill } from './ScrewdriverFill';
import { ScrewdriverFillDuotone } from './ScrewdriverFillDuotone';

export interface ScrewdriverProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Screwdriver with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScrewdriverRegular } from 'stera-icons/ScrewdriverRegular';
 */
const Screwdriver = memo(forwardRef<SVGSVGElement, ScrewdriverProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrewdriverBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScrewdriverBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScrewdriverFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScrewdriverFill ref={ref} {...rest} />;
  if (duotone) return <ScrewdriverRegularDuotone ref={ref} {...rest} />;
  return <ScrewdriverRegular ref={ref} {...rest} />;
}));

Screwdriver.displayName = 'Screwdriver';

export { Screwdriver };
