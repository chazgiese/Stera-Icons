import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoolSBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoolSBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoolSBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cool-s-bold-duotone" {...props}>
      <path fill="currentColor" d="M11.52 1.12a1 1 0 0 1 1.1.1l5 4A1 1 0 0 1 18 6v4a1 1 0 0 1-1 1h-1.59l-2-2H16V6.48l-4-3.2-4 3.2v3.1l4.7 4.71a1 1 0 0 1 .3.71v2a1 1 0 1 1-2 0v-1.59l-4.7-4.7A1 1 0 0 1 6 10V6c0-.3.14-.6.38-.78l5-4z" />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v1.59l4.7 4.7a1 1 0 0 1 .3.71v4a1 1 0 0 1-.37.78l-5 4a1 1 0 0 1-1.26 0l-5-4A1 1 0 0 1 6 18v-4a1 1 0 0 1 1-1h1.59l2 2H8v2.52l4 3.2 4-3.2v-3.1L11.3 9.7A1 1 0 0 1 11 9V7a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

CoolSBoldDuotone.displayName = 'CoolSBoldDuotone';

// Triple export pattern (lucide-react style)
export { CoolSBoldDuotone, CoolSBoldDuotone as CoolSBoldDuotoneIcon, CoolSBoldDuotone as SiCoolSBoldDuotone };
export default CoolSBoldDuotone;
export type { CoolSBoldDuotoneProps };
