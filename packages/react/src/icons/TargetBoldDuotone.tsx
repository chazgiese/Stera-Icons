import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TargetBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetBoldDuotone = memo(
  forwardRef<SVGSVGElement, TargetBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetBoldDuotone.displayName = 'TargetBoldDuotone';

// Triple export pattern (lucide-react style)
export { TargetBoldDuotone, TargetBoldDuotone as TargetBoldDuotoneIcon, TargetBoldDuotone as SiTargetBoldDuotone };
export type { TargetBoldDuotoneProps };
