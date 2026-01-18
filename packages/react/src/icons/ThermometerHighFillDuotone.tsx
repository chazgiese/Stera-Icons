import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThermometerHighFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThermometerHighFillDuotone = memo(
  forwardRef<SVGSVGElement, ThermometerHighFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 4 4v7.51l.06.07A5.99 5.99 0 0 1 12 23a6 6 0 0 1-4-10.49V5a4 4 0 0 1 4-4m0 3a1 1 0 0 0-1 1v8.11c0 .64-.43 1.18-.92 1.59a3 3 0 1 0 3.83 0c-.48-.41-.91-.95-.91-1.59V5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v8.11c0 .64.43 1.18.92 1.59a3 3 0 1 1-3.83 0c.48-.41.91-.95.91-1.59V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ThermometerHighFillDuotone.displayName = 'ThermometerHighFillDuotone';

// Triple export pattern (lucide-react style)
export { ThermometerHighFillDuotone, ThermometerHighFillDuotone as ThermometerHighFillDuotoneIcon, ThermometerHighFillDuotone as SiThermometerHighFillDuotone };
export type { ThermometerHighFillDuotoneProps };
