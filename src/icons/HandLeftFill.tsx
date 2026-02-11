import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftFillProps = Omit<IconBaseProps, 'children'>;

const HandLeftFill = memo(
  forwardRef<SVGSVGElement, HandLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left-fill" {...props}>
      <path d="M10.09 2.95c.72 0 1.3.59 1.3 1.31v5.7a.63.63 0 0 0 1.26 0V5.1a1.31 1.31 0 0 1 2.62.13v7.74a.63.63 0 0 0 1.16.31l1.6-2.7a1.3 1.3 0 0 1 2.33 1.19l-.07.12-.04.08L19.07 15l-.03.12A7.12 7.12 0 0 1 4.9 13.93V7.16a1.31 1.31 0 0 1 2.61-.13v3.41a.63.63 0 0 0 1.26 0V4.26c0-.72.59-1.3 1.3-1.3" />
    </IconBase>
  ))
);

HandLeftFill.displayName = 'HandLeftFill';

// Triple export pattern (lucide-react style)
export { HandLeftFill, HandLeftFill as HandLeftFillIcon, HandLeftFill as SiHandLeftFill };
export default HandLeftFill;
export type { HandLeftFillProps };
