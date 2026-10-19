import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentSquareFillProps = Omit<IconBaseProps, 'children'>;

const PercentSquareFill = memo(
  forwardRef<SVGSVGElement, PercentSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm3.12 5.63c-.34-.34-.9-.34-1.24 0l-7 7c-.34.34-.34.9 0 1.24s.9.34 1.24 0l7-7c.34-.34.34-.9 0-1.24m-1.37 5.37c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-5.5-5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentSquareFill.displayName = 'PercentSquareFill';

// Triple export pattern
export { PercentSquareFill, PercentSquareFill as PercentSquareFillIcon, PercentSquareFill as SiPercentSquareFill };
export default PercentSquareFill;
export type { PercentSquareFillProps };
