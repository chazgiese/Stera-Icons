import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextAlignCenterIcon as RegularTextAlignCenterIcon } from './text-align-center';
import { TextAlignCenterIconDuotone as TextAlignCenterIconDuotone } from './text-align-center-duotone';
import { TextAlignCenterIconBold as TextAlignCenterIconBold } from './text-align-center-bold';
import { TextAlignCenterIconBoldDuotone as TextAlignCenterIconBoldDuotone } from './text-align-center-bold-duotone';
import { TextAlignCenterIconFill as TextAlignCenterIconFill } from './text-align-center-fill';
import { TextAlignCenterIconFillDuotone as TextAlignCenterIconFillDuotone } from './text-align-center-fill-duotone';

export interface TextAlignCenterIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextAlignCenterIcon = memo(forwardRef<SVGSVGElement, TextAlignCenterIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextAlignCenterIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextAlignCenterIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextAlignCenterIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextAlignCenterIconFill ref={ref} {...props} />;
  if (duotone) return <TextAlignCenterIconDuotone ref={ref} {...props} />;
  return <RegularTextAlignCenterIcon ref={ref} {...props} />;
}));

TextAlignCenterIcon.displayName = 'TextAlignCenterIcon';

export { TextAlignCenterIcon };
