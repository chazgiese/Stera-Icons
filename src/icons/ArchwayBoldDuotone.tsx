import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArchwayBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-bold-duotone" {...props}>
      <path fill="currentColor" d="M19.83 21.83A4 4 0 0 1 17 23H7a4 4 0 0 1-2.83-1.17L5.6 20.4A2 2 0 0 0 7 21h10a2 2 0 0 0 1.41-.59z" opacity={.4} />
        <path fill="currentColor" d="M12 1a9 9 0 0 1 9 9v9c0 1.1-.45 2.1-1.17 2.83L18.4 20.4A2 2 0 0 0 19 19v-9a7 7 0 1 0-14 0v9a2 2 0 0 0 .59 1.41l-1.42 1.42A4 4 0 0 1 3 19v-9a9 9 0 0 1 9-9" />
    </IconBase>
  ))
);

ArchwayBoldDuotone.displayName = 'ArchwayBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArchwayBoldDuotone, ArchwayBoldDuotone as ArchwayBoldDuotoneIcon, ArchwayBoldDuotone as SiArchwayBoldDuotone };
export default ArchwayBoldDuotone;
export type { ArchwayBoldDuotoneProps };
