import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SnowflakeRegularDuotone = memo(
  forwardRef<SVGSVGElement, SnowflakeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="snowflake-duotone" {...props}>
      <path d="M12.75 19.8V22a.75.75 0 0 1-1.5 0v-2.2l.75-.43zM12.75 10.7l4.13-2.38v.43c0 .27.14.52.37.65l.38.22L13.5 12l4.13 2.38-.38.22a.8.8 0 0 0-.37.65v.43l-4.13-2.38v4.77l-.37-.22a.8.8 0 0 0-.67-.04l-.09.04-.37.22V13.3l-4.13 2.38v-.43a.8.8 0 0 0-.37-.65l-.38-.22L10.5 12 6.37 9.62l.38-.22a.8.8 0 0 0 .37-.65v-.43l4.13 2.38V5.93l.38.22c.23.13.51.13.74 0l.38-.22zM5.62 15.68v.87l-1.9 1.1a.75.75 0 0 1-.76-1.3l1.91-1.1zM21.04 16.35a.75.75 0 0 1-.75 1.3l-1.91-1.1v-.87l.75-.43zM2.69 6.63a.75.75 0 0 1 1.02-.28l1.91 1.1v.87l-.75.43-1.9-1.1a.75.75 0 0 1-.28-1.03M20.29 6.35a.75.75 0 0 1 .75 1.3l-1.91 1.1-.75-.43v-.87zM12 1.25c.41 0 .75.34.75.75v2.2l-.75.43-.75-.43V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M11.71 17.8a.8.8 0 0 1 .66.05l3 1.73a.75.75 0 0 1-.74 1.3L12 19.37l-2.62 1.51a.75.75 0 0 1-.75-1.3l3-1.73zM2.72 13.14a.75.75 0 0 1 1.03-.27l3 1.73c.23.13.37.38.37.65v3.46a.75.75 0 0 1-1.5 0v-3.03L3 14.17a.75.75 0 0 1-.28-1.03M20.25 12.87a.75.75 0 0 1 .75 1.3l-2.62 1.51v3.03a.75.75 0 0 1-1.5 0v-3.46c0-.27.14-.52.37-.65zM6.37 4.54c.42 0 .75.33.75.75v3.46c0 .27-.14.52-.37.65l-3 1.73A.75.75 0 0 1 3 9.83l2.62-1.51V5.29c0-.42.34-.75.75-.75M17.63 4.54c.41 0 .75.33.75.75v3.03L21 9.83a.75.75 0 0 1-.75 1.3l-3-1.73a.8.8 0 0 1-.37-.65V5.29c0-.42.34-.75.75-.75M14.63 3.12a.75.75 0 0 1 .74 1.3l-3 1.73a.8.8 0 0 1-.74 0l-3-1.73a.75.75 0 0 1 .75-1.3L12 4.63z" />
    </IconBase>
  ))
);

SnowflakeRegularDuotone.displayName = 'SnowflakeRegularDuotone';

// Triple export pattern (lucide-react style)
export { SnowflakeRegularDuotone, SnowflakeRegularDuotone as SnowflakeRegularDuotoneIcon, SnowflakeRegularDuotone as SiSnowflakeRegularDuotone };
export default SnowflakeRegularDuotone;
export type { SnowflakeRegularDuotoneProps };
