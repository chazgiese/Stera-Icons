import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OptionKeyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyBoldDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 4a1 1 0 0 1 0 2h-6.5a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M9.15 4.01a1 1 0 0 1 .77.6L15.66 18H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.92-.6L8.34 6H3a1 1 0 0 1 0-2h6z" />
    </IconBase>
  ))
);

OptionKeyBoldDuotone.displayName = 'OptionKeyBoldDuotone';

// Triple export pattern (lucide-react style)
export { OptionKeyBoldDuotone, OptionKeyBoldDuotone as OptionKeyBoldDuotoneIcon, OptionKeyBoldDuotone as SiOptionKeyBoldDuotone };
export type { OptionKeyBoldDuotoneProps };
