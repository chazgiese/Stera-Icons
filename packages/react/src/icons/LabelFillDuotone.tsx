import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8.22a3 3 0 0 1-2.55-1.41l-3.16-5.06a1 1 0 0 1 0-1.06l3.16-5.06A3 3 0 0 1 8.22 5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8.22a5 5 0 0 1-4.24-2.35L.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 8.22 3zM8.22 5a3 3 0 0 0-2.55 1.41l-3.16 5.06a1 1 0 0 0 0 1.06l3.16 5.06A3 3 0 0 0 8.22 19H18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelFillDuotone.displayName = 'LabelFillDuotone';

export { LabelFillDuotone };
export type { LabelFillDuotoneProps };
