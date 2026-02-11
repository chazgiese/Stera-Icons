import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-right-duotone" {...props}>
      <path d="M21 11.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M21 17.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignRightRegularDuotone.displayName = 'TextAlignRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignRightRegularDuotone, TextAlignRightRegularDuotone as TextAlignRightRegularDuotoneIcon, TextAlignRightRegularDuotone as SiTextAlignRightRegularDuotone };
export default TextAlignRightRegularDuotone;
export type { TextAlignRightRegularDuotoneProps };
