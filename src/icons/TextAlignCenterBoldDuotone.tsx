import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center-bold-duotone" {...props}>
      <path fill="currentColor" d="M17 11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M19 17a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignCenterBoldDuotone.displayName = 'TextAlignCenterBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignCenterBoldDuotone, TextAlignCenterBoldDuotone as TextAlignCenterBoldDuotoneIcon, TextAlignCenterBoldDuotone as SiTextAlignCenterBoldDuotone };
export default TextAlignCenterBoldDuotone;
export type { TextAlignCenterBoldDuotoneProps };
