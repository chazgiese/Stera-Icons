import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentSquareFillProps = Omit<IconBaseProps, 'children'>;

const PercentSquareFill = memo(
  forwardRef<SVGSVGElement, PercentSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-square-fill" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm3.62 5.25a.9.9 0 0 0-1.24 0l-7 7a.88.88 0 0 0 1.24 1.24l7-7a.9.9 0 0 0 0-1.24m-1.37 5.37a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentSquareFill.displayName = 'PercentSquareFill';

// Triple export pattern (lucide-react style)
export { PercentSquareFill, PercentSquareFill as PercentSquareFillIcon, PercentSquareFill as SiPercentSquareFill };
export default PercentSquareFill;
export type { PercentSquareFillProps };
