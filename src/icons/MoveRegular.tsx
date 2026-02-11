import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveRegularProps = Omit<IconBaseProps, 'children'>;

const MoveRegular = memo(
  forwardRef<SVGSVGElement, MoveRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="move" {...props}>
      <path d="m12.08 2.25.06.01.05.02q.05 0 .1.03l.08.04.05.03.11.09 2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22v6.44h6.44l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5.1.11.05.11.02.05.03.09v.04l.01.03.01.1q0 .2-.1.37l-.12.16-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-6.44v6.44l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5-.11.1q-.02 0-.05.02l-.08.04-.08.03-.06.01a1 1 0 0 1-.25.01h-.03l-.04-.01-.1-.03-.04-.02-.1-.06-.12-.09-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22v-6.44H4.81l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5-.12-.16a.7.7 0 0 1-.1-.47l.01-.03.01-.04.03-.1.02-.04.06-.1.09-.12 2.5-2.5a.75.75 0 1 1 1.06 1.06l-1.22 1.22h6.44V4.81l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5.11-.1.11-.05.05-.02.09-.03h.04l.03-.01.1-.01z" />
    </IconBase>
  ))
);

MoveRegular.displayName = 'MoveRegular';

// Triple export pattern (lucide-react style)
export { MoveRegular, MoveRegular as MoveRegularIcon, MoveRegular as SiMoveRegular };
export default MoveRegular;
export type { MoveRegularProps };
