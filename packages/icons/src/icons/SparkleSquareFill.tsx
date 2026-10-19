import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFill = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zm-.52 4.85c-.14-.48-.82-.48-.96 0l-.4 1.34c-.39 1.28-1.4 2.3-2.68 2.68l-1.34.4c-.48.14-.48.82 0 .96l1.34.4c1.28.39 2.3 1.4 2.68 2.68l.4 1.34c.14.48.82.48.96 0l.4-1.34c.39-1.28 1.4-2.3 2.68-2.68l1.34-.4c.48-.14.48-.82 0-.96l-1.34-.4c-1.28-.39-2.3-1.4-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleSquareFill.displayName = 'SparkleSquareFill';

// Triple export pattern
export { SparkleSquareFill, SparkleSquareFill as SparkleSquareFillIcon, SparkleSquareFill as SiSparkleSquareFill };
export default SparkleSquareFill;
export type { SparkleSquareFillProps };
