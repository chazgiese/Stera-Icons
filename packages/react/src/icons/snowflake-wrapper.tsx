import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SnowflakeIcon as RegularSnowflakeIcon } from './snowflake';
import { SnowflakeIconDuotone as SnowflakeIconDuotone } from './snowflake-duotone';
import { SnowflakeIconBold as SnowflakeIconBold } from './snowflake-bold';
import { SnowflakeIconBoldDuotone as SnowflakeIconBoldDuotone } from './snowflake-bold-duotone';
import { SnowflakeIconFill as SnowflakeIconFill } from './snowflake-fill';
import { SnowflakeIconFillDuotone as SnowflakeIconFillDuotone } from './snowflake-fill-duotone';

export interface SnowflakeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SnowflakeIcon = memo(forwardRef<SVGSVGElement, SnowflakeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SnowflakeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SnowflakeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SnowflakeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SnowflakeIconFill ref={ref} {...props} />;
  if (duotone) return <SnowflakeIconDuotone ref={ref} {...props} />;
  return <RegularSnowflakeIcon ref={ref} {...props} />;
}));

SnowflakeIcon.displayName = 'SnowflakeIcon';

export { SnowflakeIcon };
