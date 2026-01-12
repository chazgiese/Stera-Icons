import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSparkleIcon as RegularTextSparkleIcon } from './text-sparkle';
import { TextSparkleIconDuotone as TextSparkleIconDuotone } from './text-sparkle-duotone';
import { TextSparkleIconBold as TextSparkleIconBold } from './text-sparkle-bold';
import { TextSparkleIconBoldDuotone as TextSparkleIconBoldDuotone } from './text-sparkle-bold-duotone';
import { TextSparkleIconFill as TextSparkleIconFill } from './text-sparkle-fill';
import { TextSparkleIconFillDuotone as TextSparkleIconFillDuotone } from './text-sparkle-fill-duotone';

export interface TextSparkleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextSparkleIcon = memo(forwardRef<SVGSVGElement, TextSparkleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSparkleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextSparkleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextSparkleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextSparkleIconFill ref={ref} {...props} />;
  if (duotone) return <TextSparkleIconDuotone ref={ref} {...props} />;
  return <RegularTextSparkleIcon ref={ref} {...props} />;
}));

TextSparkleIcon.displayName = 'TextSparkleIcon';

export { TextSparkleIcon };
