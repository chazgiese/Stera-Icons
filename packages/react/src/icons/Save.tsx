import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SaveRegular } from './SaveRegular';
import { SaveRegularDuotone } from './SaveRegularDuotone';
import { SaveBold } from './SaveBold';
import { SaveBoldDuotone } from './SaveBoldDuotone';
import { SaveFill } from './SaveFill';
import { SaveFillDuotone } from './SaveFillDuotone';

export interface SaveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Save with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SaveRegular } from 'stera-icons/SaveRegular';
 */
const Save = memo(forwardRef<SVGSVGElement, SaveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SaveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SaveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SaveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SaveFill ref={ref} {...rest} />;
  if (duotone) return <SaveRegularDuotone ref={ref} {...rest} />;
  return <SaveRegular ref={ref} {...rest} />;
}));

Save.displayName = 'Save';

export { Save };
