import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M21 17.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignRightRegularDuotone.displayName = 'TextAlignRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignRightRegularDuotone, TextAlignRightRegularDuotone as TextAlignRightRegularDuotoneIcon, TextAlignRightRegularDuotone as SiTextAlignRightRegularDuotone };
export type { TextAlignRightRegularDuotoneProps };
