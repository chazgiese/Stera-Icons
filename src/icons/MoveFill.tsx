import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveFillProps = Omit<IconBaseProps, 'children'>;

const MoveFill = memo(
  forwardRef<SVGSVGElement, MoveFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-fill" {...props}>
      <path fill="currentColor" d="m12.1 2 .06.01.04.01.05.01.04.01a1 1 0 0 1 .27.13l.07.06.08.06 2.5 2.5a1 1 0 0 1-.71 1.71H13V11h4.5V9.5a1 1 0 0 1 1.7-.7l2.5 2.5.17.2v.01a1 1 0 0 1-.07 1.1l-.1.1-2.5 2.5a1 1 0 0 1-1.7-.71V13H13v4.5h1.5a1 1 0 0 1 .7 1.7l-2.5 2.5-.1.1a1 1 0 0 1-.3.16h-.05l-.05.02h-.03a1 1 0 0 1-.5-.04h-.01l-.15-.07h-.01l-.13-.1-.08-.06-2.5-2.5a1 1 0 0 1 .71-1.71H11V13H6.5v1.5a1 1 0 0 1-1.7.7l-2.5-2.5-.07-.07-.06-.07a1 1 0 0 1-.04-1.05v-.01l.16-.2 2.5-2.5a1 1 0 0 1 1.71.7V11H11V6.5H9.5a1 1 0 0 1-.7-1.7l2.5-2.5.07-.07.13-.1h.01l.15-.07A1 1 0 0 1 12 2z" />
    </IconBase>
  ))
);

MoveFill.displayName = 'MoveFill';

// Triple export pattern (lucide-react style)
export { MoveFill, MoveFill as MoveFillIcon, MoveFill as SiMoveFill };
export default MoveFill;
export type { MoveFillProps };
