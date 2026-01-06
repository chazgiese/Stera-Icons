import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignJustifyIcon as RegularTextAlignJustifyIcon } from './text-align-justify';
import { TextAlignJustifyIconDuotone as TextAlignJustifyIconDuotone } from './text-align-justify-duotone';
import { TextAlignJustifyIconBold as TextAlignJustifyIconBold } from './text-align-justify-bold';
import { TextAlignJustifyIconBoldDuotone as TextAlignJustifyIconBoldDuotone } from './text-align-justify-bold-duotone';
import { TextAlignJustifyIconFill as TextAlignJustifyIconFill } from './text-align-justify-fill';
import { TextAlignJustifyIconFillDuotone as TextAlignJustifyIconFillDuotone } from './text-align-justify-fill-duotone';

export interface TextAlignJustifyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextAlignJustifyIcon = memo(forwardRef<SVGSVGElement, TextAlignJustifyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignJustifyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextAlignJustifyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextAlignJustifyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextAlignJustifyIconFill ref={ref} {...props} />;
  if (duotone) return <TextAlignJustifyIconDuotone ref={ref} {...props} />;
  return <RegularTextAlignJustifyIcon ref={ref} {...props} />;
}));

TextAlignJustifyIcon.displayName = 'TextAlignJustifyIcon';

export { TextAlignJustifyIcon };
