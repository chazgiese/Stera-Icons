import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M17 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignLeftBoldDuotone.displayName = 'TextAlignLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextAlignLeftBoldDuotone, TextAlignLeftBoldDuotone as TextAlignLeftBoldDuotoneIcon, TextAlignLeftBoldDuotone as SiTextAlignLeftBoldDuotone };
export default TextAlignLeftBoldDuotone;
export type { TextAlignLeftBoldDuotoneProps };
