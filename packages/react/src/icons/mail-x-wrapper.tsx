import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailXIcon as RegularMailXIcon } from './mail-x';
import { MailXIconDuotone as MailXIconDuotone } from './mail-x-duotone';
import { MailXIconBold as MailXIconBold } from './mail-x-bold';
import { MailXIconBoldDuotone as MailXIconBoldDuotone } from './mail-x-bold-duotone';
import { MailXIconFill as MailXIconFill } from './mail-x-fill';
import { MailXIconFillDuotone as MailXIconFillDuotone } from './mail-x-fill-duotone';

export interface MailXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailXIcon = memo(forwardRef<SVGSVGElement, MailXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailXIconFill ref={ref} {...props} />;
  if (duotone) return <MailXIconDuotone ref={ref} {...props} />;
  return <RegularMailXIcon ref={ref} {...props} />;
}));

MailXIcon.displayName = 'MailXIcon';

export { MailXIcon };
