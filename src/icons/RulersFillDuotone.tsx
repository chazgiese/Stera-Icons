import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulersFillDuotone = memo(
  forwardRef<SVGSVGElement, RulersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rulers-fill-duotone" {...props}>
      <path d="M17 6a1 1 0 0 0-1 1v3h-2V7a1 1 0 1 0-2 0v3h-2v2H7a1 1 0 1 0 0 2h3v2H7a1 1 0 1 0 0 2h3v1.75C10 20.99 9 22 7.75 22h-3.5C3.01 22 2 21 2 19.75V10h8V2h9.75C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H18V7a1 1 0 0 0-1-1" opacity={0.4} />
        <path d="M8 4v4H4V4z" opacity={0.4} />
        <path d="M10 18H7a1 1 0 1 1 0-2h3zM10 14H7a1 1 0 1 1 0-2h3z" />
        <path fillRule="evenodd" d="M10 10H2V4c0-1.1.9-2 2-2h6zM4 8h4V4H4z" clipRule="evenodd" />
        <path d="M13 6a1 1 0 0 1 1 1v3h-2V7a1 1 0 0 1 1-1M17 6a1 1 0 0 1 1 1v3h-2V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

RulersFillDuotone.displayName = 'RulersFillDuotone';

// Triple export pattern (lucide-react style)
export { RulersFillDuotone, RulersFillDuotone as RulersFillDuotoneIcon, RulersFillDuotone as SiRulersFillDuotone };
export default RulersFillDuotone;
export type { RulersFillDuotoneProps };
