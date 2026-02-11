import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveBoldProps = Omit<IconBaseProps, 'children'>;

const MoveBold = memo(
  forwardRef<SVGSVGElement, MoveBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-bold" {...props}>
      <path d="m12.1 2 .06.01.04.01.05.01.04.01a1 1 0 0 1 .27.13l.07.06.08.06 2.5 2.5a1 1 0 1 1-1.42 1.42L13 5.4V11h5.59l-.8-.8a1 1 0 1 1 1.42-1.4l2.5 2.5.16.2v.01a1 1 0 0 1-.07 1.1l-.1.1-2.5 2.5a1 1 0 1 1-1.4-1.42l.79-.79H13v5.59l.8-.8a1 1 0 1 1 1.4 1.42l-2.5 2.5-.1.09a1 1 0 0 1-.3.16h-.05l-.05.02h-.03a1 1 0 0 1-.5-.04h-.01l-.15-.07h-.01l-.13-.1-.08-.06-2.5-2.5a1 1 0 1 1 1.42-1.42l.79.8V13H5.41l.8.8a1 1 0 1 1-1.42 1.4l-2.5-2.5-.06-.07-.06-.07a1 1 0 0 1-.04-1.05v-.01l.16-.2 2.5-2.5a1 1 0 1 1 1.42 1.4l-.8.8H11V5.41l-.8.8a1 1 0 1 1-1.4-1.42l2.5-2.5.07-.06.13-.1h.01l.15-.07A1 1 0 0 1 12 2z" />
    </IconBase>
  ))
);

MoveBold.displayName = 'MoveBold';

// Triple export pattern (lucide-react style)
export { MoveBold, MoveBold as MoveBoldIcon, MoveBold as SiMoveBold };
export default MoveBold;
export type { MoveBoldProps };
