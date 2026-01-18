import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PanelsLeftTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 10v7a2 2 0 0 1-2 2H9v-9z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h2V5zm4 5v9h10a2 2 0 0 0 2-2v-7zm0-2h12V7a2 2 0 0 0-2-2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopFillDuotone.displayName = 'PanelsLeftTopFillDuotone';

export { PanelsLeftTopFillDuotone };
export type { PanelsLeftTopFillDuotoneProps };
