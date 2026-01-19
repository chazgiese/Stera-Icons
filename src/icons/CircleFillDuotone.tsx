import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleFillDuotone.displayName = 'CircleFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleFillDuotone, CircleFillDuotone as CircleFillDuotoneIcon, CircleFillDuotone as SiCircleFillDuotone };
export type { CircleFillDuotoneProps };
