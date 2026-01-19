import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignCenterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center-duotone" {...props}>
      <path fill="currentColor" d="M17 11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M19 17a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignCenterRegularDuotone.displayName = 'TextAlignCenterRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignCenterRegularDuotone, TextAlignCenterRegularDuotone as TextAlignCenterRegularDuotoneIcon, TextAlignCenterRegularDuotone as SiTextAlignCenterRegularDuotone };
export default TextAlignCenterRegularDuotone;
export type { TextAlignCenterRegularDuotoneProps };
