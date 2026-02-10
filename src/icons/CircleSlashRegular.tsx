import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashRegularProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegular = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m.56 1.62a8.25 8.25 0 0 0 11.62 11.62zm12.17-.55a8.25 8.25 0 0 0-11.1-.5l11.6 11.6a8.25 8.25 0 0 0-.5-11.1" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegular.displayName = 'CircleSlashRegular';

// Triple export pattern (lucide-react style)
export { CircleSlashRegular, CircleSlashRegular as CircleSlashRegularIcon, CircleSlashRegular as SiCircleSlashRegular };
export default CircleSlashRegular;
export type { CircleSlashRegularProps };
