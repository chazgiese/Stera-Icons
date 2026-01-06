import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LinkOffIcon as RegularLinkOffIcon } from './link-off';
import { LinkOffIconDuotone as LinkOffIconDuotone } from './link-off-duotone';
import { LinkOffIconBold as LinkOffIconBold } from './link-off-bold';
import { LinkOffIconBoldDuotone as LinkOffIconBoldDuotone } from './link-off-bold-duotone';
import { LinkOffIconFill as LinkOffIconFill } from './link-off-fill';
import { LinkOffIconFillDuotone as LinkOffIconFillDuotone } from './link-off-fill-duotone';

export interface LinkOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LinkOffIcon = memo(forwardRef<SVGSVGElement, LinkOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LinkOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LinkOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LinkOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LinkOffIconFill ref={ref} {...props} />;
  if (duotone) return <LinkOffIconDuotone ref={ref} {...props} />;
  return <RegularLinkOffIcon ref={ref} {...props} />;
}));

LinkOffIcon.displayName = 'LinkOffIcon';

export { LinkOffIcon };
