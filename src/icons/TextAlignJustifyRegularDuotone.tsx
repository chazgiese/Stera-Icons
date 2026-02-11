import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-justify-duotone" {...props}>
      <path d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M21 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignJustifyRegularDuotone.displayName = 'TextAlignJustifyRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyRegularDuotone, TextAlignJustifyRegularDuotone as TextAlignJustifyRegularDuotoneIcon, TextAlignJustifyRegularDuotone as SiTextAlignJustifyRegularDuotone };
export default TextAlignJustifyRegularDuotone;
export type { TextAlignJustifyRegularDuotoneProps };
