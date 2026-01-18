import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextBRegular } from './TextBRegular';
import { TextBRegularDuotone } from './TextBRegularDuotone';
import { TextBBold } from './TextBBold';
import { TextBBoldDuotone } from './TextBBoldDuotone';
import { TextBFill } from './TextBFill';
import { TextBFillDuotone } from './TextBFillDuotone';

export interface TextBProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextB with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TextBRegular } from 'stera-icons/TextBRegular';
 */
const TextB = memo(forwardRef<SVGSVGElement, TextBProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextBBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextBBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextBFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextBFill ref={ref} {...rest} />;
  if (duotone) return <TextBRegularDuotone ref={ref} {...rest} />;
  return <TextBRegular ref={ref} {...rest} />;
}));

TextB.displayName = 'TextB';

export { TextB };
