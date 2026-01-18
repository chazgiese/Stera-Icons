import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ThermometerLowFillProps = Omit<IconBaseProps, 'children'>;

const ThermometerLowFill = memo(
  forwardRef<SVGSVGElement, ThermometerLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 4 4v7.51l.06.07A5.99 5.99 0 0 1 12 23a6 6 0 0 1-4-10.49V5a4 4 0 0 1 4-4m0 10a1 1 0 0 0-1 1v1.11c0 .64-.43 1.18-.92 1.59a3 3 0 1 0 3.83 0c-.48-.41-.91-.95-.91-1.59V12a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ThermometerLowFill.displayName = 'ThermometerLowFill';

// Triple export pattern (lucide-react style)
export { ThermometerLowFill, ThermometerLowFill as ThermometerLowFillIcon, ThermometerLowFill as SiThermometerLowFill };
export type { ThermometerLowFillProps };
