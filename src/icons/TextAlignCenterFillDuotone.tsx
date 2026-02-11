import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center-fill-duotone" {...props}>
      <path d="M17 10.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path d="M19 16.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignCenterFillDuotone.displayName = 'TextAlignCenterFillDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignCenterFillDuotone, TextAlignCenterFillDuotone as TextAlignCenterFillDuotoneIcon, TextAlignCenterFillDuotone as SiTextAlignCenterFillDuotone };
export default TextAlignCenterFillDuotone;
export type { TextAlignCenterFillDuotoneProps };
