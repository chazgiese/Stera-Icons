import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashBoldDuotone = memo(
  forwardRef<SVGSVGElement, HashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-bold-duotone" {...props}>
      <path d="M10 21a1 1 0 1 1-2 0v-5h2zM16 21a1 1 0 1 1-2 0v-5h2zM10 14H8v-4h2zM16 14h-2v-4h2zM9 2a1 1 0 0 1 1 1v5H8V3a1 1 0 0 1 1-1M15 2a1 1 0 0 1 1 1v5h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M21 14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

HashBoldDuotone.displayName = 'HashBoldDuotone';

// Triple export pattern (lucide-react style)
export { HashBoldDuotone, HashBoldDuotone as HashBoldDuotoneIcon, HashBoldDuotone as SiHashBoldDuotone };
export default HashBoldDuotone;
export type { HashBoldDuotoneProps };
