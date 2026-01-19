import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoveRegularProps = Omit<IconBaseProps, 'children'>;

const MoveRegular = memo(
  forwardRef<SVGSVGElement, MoveRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="move" {...props}>
      <path fill="currentColor" d="M12 1.25q.31 0 .53.22l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.21v7.43h7.44l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5.1.11.05.11.02.05.03.09v.04l.01.03.01.1q0 .2-.1.37l-.12.16-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-7.44v7.43l1.22-1.21a.75.75 0 1 1 1.06 1.06l-2.45 2.45a.8.8 0 0 1-.58.27l-.21-.03h-.01a1 1 0 0 1-.3-.18l-2.51-2.51a.75.75 0 1 1 1.06-1.06l1.22 1.22v-7.44H3.81l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5-.12-.16a.7.7 0 0 1-.1-.47l.01-.03.01-.04.03-.1.02-.04.06-.1.09-.12 2.5-2.5a.75.75 0 1 1 1.06 1.06l-1.22 1.22h7.44V3.81l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5.11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

MoveRegular.displayName = 'MoveRegular';

// Triple export pattern (lucide-react style)
export { MoveRegular, MoveRegular as MoveRegularIcon, MoveRegular as SiMoveRegular };
export default MoveRegular;
export type { MoveRegularProps };
