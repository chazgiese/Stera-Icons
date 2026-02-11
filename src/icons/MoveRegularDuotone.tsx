import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-duotone" {...props}>
      <path d="M12.75 4.81v6.44h6.44l.75.75-.75.75h-6.44v6.44l-.75.75-.75-.75v-6.44H4.81L4.06 12l.75-.75h6.44V4.81l.75-.75z" opacity={.4} />
        <path d="M13.97 17.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L12 19.94zM4.97 8.97a.75.75 0 1 1 1.06 1.06L4.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zM17.97 8.97c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L19.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06M12 2.25q.31 0 .53.22l2.5 2.5a.75.75 0 1 1-1.06 1.06L12 4.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06l2.5-2.5.11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

MoveRegularDuotone.displayName = 'MoveRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoveRegularDuotone, MoveRegularDuotone as MoveRegularDuotoneIcon, MoveRegularDuotone as SiMoveRegularDuotone };
export default MoveRegularDuotone;
export type { MoveRegularDuotoneProps };
