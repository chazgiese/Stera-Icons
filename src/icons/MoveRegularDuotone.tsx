import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-duotone" {...props}>
      <path fill="currentColor" d="M13.97 18.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L12 20.94zM3.97 8.97a.75.75 0 1 1 1.06 1.06L3.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zM18.97 8.97c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L20.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06M12 1.25q.31 0 .53.22l2.5 2.5a.75.75 0 1 1-1.06 1.06L12 3.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06l2.5-2.5.11-.1a1 1 0 0 1 .42-.12" />
        <path fill="currentColor" d="M12.75 3.82v7.43h7.44l.75.75-.75.75h-7.44v7.43l-.75.76-.75-.75v-7.44H3.81L3.06 12l.75-.75h7.44V3.81l.75-.75z" opacity={.4} />
    </IconBase>
  ))
);

MoveRegularDuotone.displayName = 'MoveRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoveRegularDuotone, MoveRegularDuotone as MoveRegularDuotoneIcon, MoveRegularDuotone as SiMoveRegularDuotone };
export default MoveRegularDuotone;
export type { MoveRegularDuotoneProps };
