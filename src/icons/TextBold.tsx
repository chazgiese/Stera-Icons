import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBoldProps = Omit<IconBaseProps, 'children'>;

const TextBold = memo(
  forwardRef<SVGSVGElement, TextBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-bold" {...props}>
      <path fill="currentColor" d="M17 3a3 3 0 0 1 3 3 1 1 0 0 1-2 .1v-.2a1 1 0 0 0-1-.9h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 .9v.2A1 1 0 0 1 4 6a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

TextBold.displayName = 'TextBold';

// Triple export pattern (lucide-react style)
export { TextBold, TextBold as TextBoldIcon, TextBold as SiTextBold };
export default TextBold;
export type { TextBoldProps };
