import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailOpenIcon as RegularMailOpenIcon } from './mail-open';
import { MailOpenIconDuotone as MailOpenIconDuotone } from './mail-open-duotone';
import { MailOpenIconBold as MailOpenIconBold } from './mail-open-bold';
import { MailOpenIconBoldDuotone as MailOpenIconBoldDuotone } from './mail-open-bold-duotone';
import { MailOpenIconFill as MailOpenIconFill } from './mail-open-fill';
import { MailOpenIconFillDuotone as MailOpenIconFillDuotone } from './mail-open-fill-duotone';

export interface MailOpenIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailOpenIcon = memo(forwardRef<SVGSVGElement, MailOpenIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailOpenIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailOpenIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailOpenIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailOpenIconFill ref={ref} {...props} />;
  if (duotone) return <MailOpenIconDuotone ref={ref} {...props} />;
  return <RegularMailOpenIcon ref={ref} {...props} />;
}));

MailOpenIcon.displayName = 'MailOpenIcon';

export { MailOpenIcon };
