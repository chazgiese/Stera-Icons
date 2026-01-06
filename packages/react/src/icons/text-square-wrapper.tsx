import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSquareIcon as RegularTextSquareIcon } from './text-square';
import { TextSquareIconDuotone as TextSquareIconDuotone } from './text-square-duotone';
import { TextSquareIconBold as TextSquareIconBold } from './text-square-bold';
import { TextSquareIconBoldDuotone as TextSquareIconBoldDuotone } from './text-square-bold-duotone';
import { TextSquareIconFill as TextSquareIconFill } from './text-square-fill';
import { TextSquareIconFillDuotone as TextSquareIconFillDuotone } from './text-square-fill-duotone';

export interface TextSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextSquareIcon = memo(forwardRef<SVGSVGElement, TextSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextSquareIconFill ref={ref} {...props} />;
  if (duotone) return <TextSquareIconDuotone ref={ref} {...props} />;
  return <RegularTextSquareIcon ref={ref} {...props} />;
}));

TextSquareIcon.displayName = 'TextSquareIcon';

export { TextSquareIcon };
