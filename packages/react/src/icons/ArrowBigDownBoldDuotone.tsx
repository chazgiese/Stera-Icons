import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8 9.5a1 1 0 0 1 0 2H4.41l7.41 7.4c.1.1.26.1.36 0l7.4-7.4H16a1 1 0 1 1 0-2h4.8c1.33 0 2 1.62 1.05 2.56l-8.26 8.26c-.88.88-2.3.88-3.18 0l-8.26-8.26A1.5 1.5 0 0 1 3.2 9.5z" />
        <path fill="currentColor" d="M14 3a3 3 0 0 1 3 3v3.5h-1a1 1 0 0 0-1 1V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4.5a1 1 0 0 0-1-1H7V6a3 3 0 0 1 3-3z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigDownBoldDuotone.displayName = 'ArrowBigDownBoldDuotone';

export { ArrowBigDownBoldDuotone };
export type { ArrowBigDownBoldDuotoneProps };
