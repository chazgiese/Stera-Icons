import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSearchIcon as RegularTextSearchIcon } from './text-search';
import { TextSearchIconDuotone as TextSearchIconDuotone } from './text-search-duotone';
import { TextSearchIconBold as TextSearchIconBold } from './text-search-bold';
import { TextSearchIconBoldDuotone as TextSearchIconBoldDuotone } from './text-search-bold-duotone';
import { TextSearchIconFill as TextSearchIconFill } from './text-search-fill';
import { TextSearchIconFillDuotone as TextSearchIconFillDuotone } from './text-search-fill-duotone';

export interface TextSearchIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TextSearchIcon = memo(forwardRef<SVGSVGElement, TextSearchIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSearchIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TextSearchIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TextSearchIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TextSearchIconFill ref={ref} {...props} />;
  if (duotone) return <TextSearchIconDuotone ref={ref} {...props} />;
  return <RegularTextSearchIcon ref={ref} {...props} />;
}));

TextSearchIcon.displayName = 'TextSearchIcon';

export { TextSearchIcon };
