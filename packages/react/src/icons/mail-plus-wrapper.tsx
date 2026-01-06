import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailPlusIcon as RegularMailPlusIcon } from './mail-plus';
import { MailPlusIconDuotone as MailPlusIconDuotone } from './mail-plus-duotone';
import { MailPlusIconBold as MailPlusIconBold } from './mail-plus-bold';
import { MailPlusIconBoldDuotone as MailPlusIconBoldDuotone } from './mail-plus-bold-duotone';
import { MailPlusIconFill as MailPlusIconFill } from './mail-plus-fill';
import { MailPlusIconFillDuotone as MailPlusIconFillDuotone } from './mail-plus-fill-duotone';

export interface MailPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailPlusIcon = memo(forwardRef<SVGSVGElement, MailPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailPlusIconFill ref={ref} {...props} />;
  if (duotone) return <MailPlusIconDuotone ref={ref} {...props} />;
  return <RegularMailPlusIcon ref={ref} {...props} />;
}));

MailPlusIcon.displayName = 'MailPlusIcon';

export { MailPlusIcon };
