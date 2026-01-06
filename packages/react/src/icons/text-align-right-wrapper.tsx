import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignRightIcon as RegularTextAlignRightIcon } from './text-align-right';
import { TextAlignRightIconDuotone as TextAlignRightIconDuotone } from './text-align-right-duotone';
import { TextAlignRightIconBold as TextAlignRightIconBold } from './text-align-right-bold';
import { TextAlignRightIconBoldDuotone as TextAlignRightIconBoldDuotone } from './text-align-right-bold-duotone';
import { TextAlignRightIconFill as TextAlignRightIconFill } from './text-align-right-fill';
import { TextAlignRightIconFillDuotone as TextAlignRightIconFillDuotone } from './text-align-right-fill-duotone';

export interface TextAlignRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextAlignRightIcon = memo(forwardRef<SVGSVGElement, TextAlignRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextAlignRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextAlignRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextAlignRightIconFill ref={ref} {...props} />;
  if (duotone) return <TextAlignRightIconDuotone ref={ref} {...props} />;
  return <RegularTextAlignRightIcon ref={ref} {...props} />;
}));

TextAlignRightIcon.displayName = 'TextAlignRightIcon';

export { TextAlignRightIcon };
