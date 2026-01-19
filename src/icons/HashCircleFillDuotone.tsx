import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, HashCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-circle-fill-duotone" {...props}>
      <path d="M13 11v2h-2v-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m2 5a1 1 0 0 0-1 1v2h-2V7a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 2 0v2h2V7a1 1 0 0 1 1-1m-3 7h2v-2h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFillDuotone.displayName = 'HashCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { HashCircleFillDuotone, HashCircleFillDuotone as HashCircleFillDuotoneIcon, HashCircleFillDuotone as SiHashCircleFillDuotone };
export type { HashCircleFillDuotoneProps };
