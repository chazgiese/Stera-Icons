import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashRegularProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegular = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.75 4.75c4-4 10.5-4 14.5 0s4 10.5 0 14.5-10.5 4-14.5 0-4-10.5 0-14.5m.56 1.62c-2.9 3.43-2.74 8.58.5 11.82s8.38 3.4 11.82.5zm12.88-.56c-3.24-3.24-8.39-3.4-11.82-.5l12.32 12.32c2.9-3.43 2.74-8.58-.5-11.82" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegular.displayName = 'CircleSlashRegular';

// Triple export pattern
export { CircleSlashRegular, CircleSlashRegular as CircleSlashRegularIcon, CircleSlashRegular as SiCircleSlashRegular };
export default CircleSlashRegular;
export type { CircleSlashRegularProps };
