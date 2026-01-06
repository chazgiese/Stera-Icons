import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThumbsUpIcon as RegularThumbsUpIcon } from './thumbs-up';
import { ThumbsUpIconDuotone as ThumbsUpIconDuotone } from './thumbs-up-duotone';
import { ThumbsUpIconBold as ThumbsUpIconBold } from './thumbs-up-bold';
import { ThumbsUpIconBoldDuotone as ThumbsUpIconBoldDuotone } from './thumbs-up-bold-duotone';
import { ThumbsUpIconFill as ThumbsUpIconFill } from './thumbs-up-fill';
import { ThumbsUpIconFillDuotone as ThumbsUpIconFillDuotone } from './thumbs-up-fill-duotone';

export interface ThumbsUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ThumbsUpIcon = memo(forwardRef<SVGSVGElement, ThumbsUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThumbsUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ThumbsUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ThumbsUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ThumbsUpIconFill ref={ref} {...props} />;
  if (duotone) return <ThumbsUpIconDuotone ref={ref} {...props} />;
  return <RegularThumbsUpIcon ref={ref} {...props} />;
}));

ThumbsUpIcon.displayName = 'ThumbsUpIcon';

export { ThumbsUpIcon };
