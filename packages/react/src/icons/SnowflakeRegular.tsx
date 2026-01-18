import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SnowflakeRegularProps = Omit<IconBaseProps, 'children'>;

const SnowflakeRegular = memo(
  forwardRef<SVGSVGElement, SnowflakeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25c.41 0 .75.34.75.75v2.2l1.87-1.08a.75.75 0 0 1 .75 1.3l-2.62 1.51v4.77l4.13-2.38V5.29a.75.75 0 0 1 1.5 0v2.16l1.9-1.1a.75.75 0 1 1 .76 1.3l-1.91 1.1L21 9.83a.75.75 0 0 1-.75 1.3l-2.62-1.51L13.5 12l4.13 2.38 2.62-1.51a.75.75 0 0 1 .75 1.3l-1.87 1.08 1.9 1.1a.75.75 0 1 1-.74 1.3l-1.91-1.1v2.16a.75.75 0 1 1-1.5 0v-3.03l-4.13-2.38v4.77l2.62 1.51a.75.75 0 0 1-.75 1.3l-1.87-1.08V22a.75.75 0 0 1-1.5 0v-2.2l-1.88 1.08a.75.75 0 0 1-.75-1.3l2.63-1.51V13.3l-4.13 2.38v3.03a.75.75 0 0 1-1.5 0v-2.16l-1.9 1.1a.75.75 0 0 1-.76-1.3l1.91-1.1L3 14.17a.75.75 0 0 1 .75-1.3l2.62 1.51L10.5 12 6.37 9.62l-2.62 1.51A.75.75 0 0 1 3 9.83l1.87-1.08-1.9-1.1a.75.75 0 1 1 .74-1.3l1.91 1.1V5.3a.75.75 0 0 1 1.5 0v3.03l4.13 2.38V5.93L8.62 4.42a.75.75 0 0 1 .75-1.3l1.88 1.08V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SnowflakeRegular.displayName = 'SnowflakeRegular';

export { SnowflakeRegular };
export type { SnowflakeRegularProps };
