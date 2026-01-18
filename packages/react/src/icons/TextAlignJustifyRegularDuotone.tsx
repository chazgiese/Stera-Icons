import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignJustifyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M21 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignJustifyRegularDuotone.displayName = 'TextAlignJustifyRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyRegularDuotone, TextAlignJustifyRegularDuotone as TextAlignJustifyRegularDuotoneIcon, TextAlignJustifyRegularDuotone as SiTextAlignJustifyRegularDuotone };
export type { TextAlignJustifyRegularDuotoneProps };
