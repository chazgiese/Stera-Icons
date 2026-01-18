import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LabelFillProps = Omit<IconBaseProps, 'children'>;

const LabelFill = memo(
  forwardRef<SVGSVGElement, LabelFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8.22a5 5 0 0 1-4.24-2.35L.8 13.59a3 3 0 0 1 0-3.18l3.17-5.06A5 5 0 0 1 8.22 3z" />
    </IconBase>
  ))
);

LabelFill.displayName = 'LabelFill';

export { LabelFill };
export type { LabelFillProps };
