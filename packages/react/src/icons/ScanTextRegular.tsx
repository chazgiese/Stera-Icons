import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanTextRegularProps = Omit<IconBaseProps, 'children'>;

const ScanTextRegular = memo(
  forwardRef<SVGSVGElement, ScanTextRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16.25c.41 0 .75.34.75.75v2.5c0 .41.34.75.75.75H7a.75.75 0 0 1 0 1.5H4.5c-1.24 0-2.25-1-2.25-2.25V17c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2.5c0 1.24-1 2.25-2.25 2.25H17a.75.75 0 0 1 0-1.5h2.5c.41 0 .75-.34.75-.75V17c0-.41.34-.75.75-.75M13 14.75a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 11.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 7.75a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM7 2.25a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 0-.75.75V7a.75.75 0 0 1-1.5 0V4.5c0-1.24 1-2.25 2.25-2.25zM19.5 2.25c1.24 0 2.25 1 2.25 2.25V7a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 0-.75-.75H17a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanTextRegular.displayName = 'ScanTextRegular';

export { ScanTextRegular };
export type { ScanTextRegularProps };
