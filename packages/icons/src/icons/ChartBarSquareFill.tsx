import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarSquareFillProps = Omit<IconBaseProps, 'children'>;

const ChartBarSquareFill = memo(
  forwardRef<SVGSVGElement, ChartBarSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-4.5 7.88c-.48 0-.87.39-.87.87v5c0 .48.39.88.87.88s.88-.4.88-.88v-5c0-.48-.4-.87-.88-.87m3.5-3c-.48 0-.87.39-.87.87v8c0 .48.39.88.87.88s.88-.4.88-.88V8c0-.48-.4-.87-.88-.87m3.5 5c-.48 0-.87.39-.87.87v3c0 .48.39.88.87.88s.88-.4.88-.88v-3c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarSquareFill.displayName = 'ChartBarSquareFill';

// Triple export pattern
export { ChartBarSquareFill, ChartBarSquareFill as ChartBarSquareFillIcon, ChartBarSquareFill as SiChartBarSquareFill };
export default ChartBarSquareFill;
export type { ChartBarSquareFillProps };
