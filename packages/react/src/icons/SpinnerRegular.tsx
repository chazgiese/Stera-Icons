import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpinnerRegularProps = Omit<IconBaseProps, 'children'>;

const SpinnerRegular = memo(
  forwardRef<SVGSVGElement, SpinnerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 18.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M6.52 16.42a.75.75 0 1 1 1.06 1.06L5.46 19.6a.75.75 0 1 1-1.06-1.06zM16.42 16.42c.29-.29.76-.29 1.06 0l2.12 2.12a.75.75 0 0 1-1.06 1.06l-2.12-2.12a.75.75 0 0 1 0-1.06M5 11.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM4.4 4.4c.29-.3.76-.3 1.06 0l2.12 2.12a.75.75 0 0 1-1.06 1.06L4.4 5.46a.75.75 0 0 1 0-1.06M18.54 4.4a.75.75 0 0 1 1.06 1.06l-2.12 2.12a.75.75 0 1 1-1.06-1.06zM12 1.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SpinnerRegular.displayName = 'SpinnerRegular';

export { SpinnerRegular };
export type { SpinnerRegularProps };
