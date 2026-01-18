import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyAltFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 6.5a5.5 5.5 0 1 1-4.9 8H9.7l-1.75 1.76-.35-.46-1.15-1.54L5 15.71 1.3 12l2.5-2.5h8.3a5.5 5.5 0 0 1 4.9-3m1.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

KeyAltFillDuotone.displayName = 'KeyAltFillDuotone';

// Triple export pattern (lucide-react style)
export { KeyAltFillDuotone, KeyAltFillDuotone as KeyAltFillDuotoneIcon, KeyAltFillDuotone as SiKeyAltFillDuotone };
export type { KeyAltFillDuotoneProps };
