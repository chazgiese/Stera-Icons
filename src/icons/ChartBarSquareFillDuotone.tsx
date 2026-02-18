import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartBarSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartBarSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-4 7.5c-.48 0-.87.39-.87.87v5a.88.88 0 0 0 1.75 0v-5c0-.48-.4-.87-.88-.87m3.5-3c-.48 0-.87.39-.87.87v8a.88.88 0 0 0 1.74 0V8c0-.48-.39-.87-.87-.87m3.5 5c-.48 0-.87.39-.87.87v3a.88.88 0 0 0 1.74 0v-3c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M8.5 10.13c.48 0 .88.39.88.87v5a.88.88 0 0 1-1.76 0v-5c0-.48.4-.87.88-.87M12 7.13c.48 0 .88.39.88.87v8a.88.88 0 0 1-1.76 0V8c0-.48.4-.87.88-.87M15.5 12.13c.48 0 .88.39.88.87v3a.88.88 0 0 1-1.75 0v-3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ChartBarSquareFillDuotone.displayName = 'ChartBarSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { ChartBarSquareFillDuotone, ChartBarSquareFillDuotone as ChartBarSquareFillDuotoneIcon, ChartBarSquareFillDuotone as SiChartBarSquareFillDuotone };
export default ChartBarSquareFillDuotone;
export type { ChartBarSquareFillDuotoneProps };
