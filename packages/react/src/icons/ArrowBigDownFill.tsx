import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownFill = memo(
  forwardRef<SVGSVGElement, ArrowBigDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 3.25c.97 0 1.75.78 1.75 1.75v4.75h4.04c1.12 0 1.67 1.35.89 2.13l-8.27 8.27a2 2 0 0 1-2.82 0l-8.27-8.27a1.25 1.25 0 0 1 .89-2.13h4.04V5c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ArrowBigDownFill.displayName = 'ArrowBigDownFill';

export { ArrowBigDownFill };
export type { ArrowBigDownFillProps };
