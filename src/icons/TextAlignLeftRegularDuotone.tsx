import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-left-duotone" {...props}>
      <path fill="currentColor" d="M13 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M17 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignLeftRegularDuotone.displayName = 'TextAlignLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignLeftRegularDuotone, TextAlignLeftRegularDuotone as TextAlignLeftRegularDuotoneIcon, TextAlignLeftRegularDuotone as SiTextAlignLeftRegularDuotone };
export default TextAlignLeftRegularDuotone;
export type { TextAlignLeftRegularDuotoneProps };
