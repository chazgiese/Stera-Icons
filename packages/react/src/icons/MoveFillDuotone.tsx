import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveFillDuotone = memo(
  forwardRef<SVGSVGElement, MoveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 11h5.5v2H13v5.5h-2V13H5.5v-2H11V5.5h2z" opacity={.4} />
        <path fill="currentColor" d="M14.5 18.5a1 1 0 0 1 .7 1.7l-2.5 2.5a1 1 0 0 1-1.33.07l-.08-.06-2.5-2.5a1 1 0 0 1 .71-1.71zM3.8 8.8a1 1 0 0 1 1.7.7v5a1 1 0 0 1-1.7.7l-2.5-2.5a1 1 0 0 1-.07-1.33l.06-.08zM19.12 8.58a1 1 0 0 1 1.09.21l2.5 2.5.06.08a1 1 0 0 1-.06 1.34l-2.5 2.5a1 1 0 0 1-1.71-.71v-5a1 1 0 0 1 .62-.92M12 1a1 1 0 0 1 .7.3l2.5 2.5a1 1 0 0 1-.7 1.7h-5a1 1 0 0 1-.7-1.7l2.5-2.5.07-.07A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

MoveFillDuotone.displayName = 'MoveFillDuotone';

// Triple export pattern (lucide-react style)
export { MoveFillDuotone, MoveFillDuotone as MoveFillDuotoneIcon, MoveFillDuotone as SiMoveFillDuotone };
export type { MoveFillDuotoneProps };
