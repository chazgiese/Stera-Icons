import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailIcon as RegularMailIcon } from './mail';
import { MailIconDuotone as MailIconDuotone } from './mail-duotone';
import { MailIconBold as MailIconBold } from './mail-bold';
import { MailIconBoldDuotone as MailIconBoldDuotone } from './mail-bold-duotone';
import { MailIconFill as MailIconFill } from './mail-fill';
import { MailIconFillDuotone as MailIconFillDuotone } from './mail-fill-duotone';

export interface MailIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailIcon = memo(forwardRef<SVGSVGElement, MailIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailIconFill ref={ref} {...props} />;
  if (duotone) return <MailIconDuotone ref={ref} {...props} />;
  return <RegularMailIcon ref={ref} {...props} />;
}));

MailIcon.displayName = 'MailIcon';

export { MailIcon };
