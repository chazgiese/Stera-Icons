import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignJustifyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-justify-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M21 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignJustifyBoldDuotone.displayName = 'TextAlignJustifyBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyBoldDuotone, TextAlignJustifyBoldDuotone as TextAlignJustifyBoldDuotoneIcon, TextAlignJustifyBoldDuotone as SiTextAlignJustifyBoldDuotone };
export type { TextAlignJustifyBoldDuotoneProps };
