import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleFillProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleFill = memo(
  forwardRef<SVGSVGElement, ContrastCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 16.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75V16.5q.9 0 1.72-.34.83-.35 1.46-.98t.98-1.46q.33-.82.34-1.72 0-.9-.34-1.72-.35-.83-.98-1.46t-1.46-.98Q12.9 7.51 12 7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleFill.displayName = 'ContrastCircleFill';

// Triple export pattern
export { ContrastCircleFill, ContrastCircleFill as ContrastCircleFillIcon, ContrastCircleFill as SiContrastCircleFill };
export default ContrastCircleFill;
export type { ContrastCircleFillProps };
