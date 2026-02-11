import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveFillDuotone = memo(
  forwardRef<SVGSVGElement, MoveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-fill-duotone" {...props}>
      <path d="M13 11h4.5v2H13v4.5h-2V13H6.5v-2H11V6.5h2z" opacity={.4} />
        <path d="M14.5 17.5a1 1 0 0 1 .7 1.7l-2.5 2.5a1 1 0 0 1-1.4 0l-2.5-2.5a1 1 0 0 1 .7-1.7zM4.8 8.8a1 1 0 0 1 1.7.7v5a1 1 0 0 1-1.7.7l-2.5-2.5a1 1 0 0 1 0-1.4zM18.12 8.58a1 1 0 0 1 1.09.21l2.5 2.5a1 1 0 0 1 0 1.42l-2.5 2.5a1 1 0 0 1-1.71-.71v-5a1 1 0 0 1 .62-.92M12 2a1 1 0 0 1 .7.3l2.5 2.5a1 1 0 0 1-.7 1.7h-5a1 1 0 0 1-.7-1.7l2.5-2.5.07-.07A1 1 0 0 1 12 2" />
    </IconBase>
  ))
);

MoveFillDuotone.displayName = 'MoveFillDuotone';

// Triple export pattern (lucide-react style)
export { MoveFillDuotone, MoveFillDuotone as MoveFillDuotoneIcon, MoveFillDuotone as SiMoveFillDuotone };
export default MoveFillDuotone;
export type { MoveFillDuotoneProps };
