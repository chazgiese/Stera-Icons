import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftBold = memo(
  forwardRef<SVGSVGElement, TextAlignLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-left-bold" {...props}>
      <path d="M17 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM13 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignLeftBold.displayName = 'TextAlignLeftBold';

// Triple export pattern (lucide-react style)
export { TextAlignLeftBold, TextAlignLeftBold as TextAlignLeftBoldIcon, TextAlignLeftBold as SiTextAlignLeftBold };
export default TextAlignLeftBold;
export type { TextAlignLeftBoldProps };
