import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SnowflakeIcon as RegularSnowflakeIcon } from './snowflake';
import { SnowflakeIconBold } from './snowflake-bold';
import { SnowflakeIconFilled } from './snowflake-filled';
import { SnowflakeIconFilltone } from './snowflake-filltone';
import { SnowflakeIconLinetone } from './snowflake-linetone';

export interface SnowflakeIconProps extends IconProps {
  variant?: IconVariant;
}

const SnowflakeIcon = memo(forwardRef<SVGSVGElement, SnowflakeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SnowflakeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SnowflakeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SnowflakeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SnowflakeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSnowflakeIcon ref={ref} {...props} />;
  }
}));

SnowflakeIcon.displayName = 'SnowflakeIcon';

export { SnowflakeIcon };
