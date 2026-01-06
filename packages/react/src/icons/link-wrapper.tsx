import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LinkIcon as RegularLinkIcon } from './link';
import { LinkIconDuotone as LinkIconDuotone } from './link-duotone';
import { LinkIconBold as LinkIconBold } from './link-bold';
import { LinkIconBoldDuotone as LinkIconBoldDuotone } from './link-bold-duotone';
import { LinkIconFill as LinkIconFill } from './link-fill';
import { LinkIconFillDuotone as LinkIconFillDuotone } from './link-fill-duotone';

export interface LinkIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LinkIcon = memo(forwardRef<SVGSVGElement, LinkIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LinkIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LinkIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LinkIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LinkIconFill ref={ref} {...props} />;
  if (duotone) return <LinkIconDuotone ref={ref} {...props} />;
  return <RegularLinkIcon ref={ref} {...props} />;
}));

LinkIcon.displayName = 'LinkIcon';

export { LinkIcon };
