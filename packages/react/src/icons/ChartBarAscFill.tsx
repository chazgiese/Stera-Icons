import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarAscFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarAscFill = memo(
  forwardRef<SVGSVGElement, ChartBarAscFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.75 3c.69 0 1.25.56 1.25 1.25V19h1a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1v-6.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19h1.5V8.25c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25V19H16V4.25c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ChartBarAscFill.displayName = 'ChartBarAscFill';

export { ChartBarAscFill };
export type { ChartBarAscFillProps };
