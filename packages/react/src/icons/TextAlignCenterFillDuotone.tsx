import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 10.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M19 16.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignCenterFillDuotone.displayName = 'TextAlignCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignCenterFillDuotone, TextAlignCenterFillDuotone as TextAlignCenterFillDuotoneIcon, TextAlignCenterFillDuotone as SiTextAlignCenterFillDuotone };
export type { TextAlignCenterFillDuotoneProps };
