import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TextSearchIcon as RegularTextSearchIcon } from './text-search';
import { TextSearchIconBold } from './text-search-bold';
import { TextSearchIconFilled } from './text-search-filled';
import { TextSearchIconFilltone } from './text-search-filltone';
import { TextSearchIconLinetone } from './text-search-linetone';

export interface TextSearchIconProps extends IconProps {
  variant?: IconVariant;
}

const TextSearchIcon = memo(forwardRef<SVGSVGElement, TextSearchIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextSearchIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextSearchIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TextSearchIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TextSearchIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTextSearchIcon ref={ref} {...props} />;
  }
}));

TextSearchIcon.displayName = 'TextSearchIcon';

export { TextSearchIcon };
