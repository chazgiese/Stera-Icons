import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleDashedFillProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedFill = memo(
  forwardRef<SVGSVGElement, RectangleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 15.5a1 1 0 0 1 1 1v.04C3 17.9 4.1 19 5.46 19h.04a1 1 0 1 1 0 2h-.04C3 21 1 19 1 16.54v-.04a1 1 0 0 1 1-1M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM22 15.5a1 1 0 0 1 1 1v.04C23 19 21 21 18.54 21h-.04a1 1 0 1 1 0-2h.04C19.9 19 21 17.9 21 16.54v-.04a1 1 0 0 1 1-1M17 7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2zM2 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M22 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M5.5 3a1 1 0 0 1 0 2h-.04A2.46 2.46 0 0 0 3 7.46v.04a1 1 0 0 1-2 0v-.04C1 5 3 3 5.46 3zM18.54 3C21 3 23 5 23 7.46v.04a1 1 0 1 1-2 0v-.04C21 6.1 19.9 5 18.54 5h-.04a1 1 0 1 1 0-2zM15 3a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

RectangleDashedFill.displayName = 'RectangleDashedFill';

export { RectangleDashedFill };
export type { RectangleDashedFillProps };
