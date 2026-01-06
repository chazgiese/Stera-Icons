import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MailMinusIcon as RegularMailMinusIcon } from './mail-minus';
import { MailMinusIconDuotone as MailMinusIconDuotone } from './mail-minus-duotone';
import { MailMinusIconBold as MailMinusIconBold } from './mail-minus-bold';
import { MailMinusIconBoldDuotone as MailMinusIconBoldDuotone } from './mail-minus-bold-duotone';
import { MailMinusIconFill as MailMinusIconFill } from './mail-minus-fill';
import { MailMinusIconFillDuotone as MailMinusIconFillDuotone } from './mail-minus-fill-duotone';

export interface MailMinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MailMinusIcon = memo(forwardRef<SVGSVGElement, MailMinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MailMinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MailMinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MailMinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MailMinusIconFill ref={ref} {...props} />;
  if (duotone) return <MailMinusIconDuotone ref={ref} {...props} />;
  return <RegularMailMinusIcon ref={ref} {...props} />;
}));

MailMinusIcon.displayName = 'MailMinusIcon';

export { MailMinusIcon };
