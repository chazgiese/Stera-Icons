import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignJustifyBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyBold = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-justify-bold" {...props}>
      <path fill="currentColor" d="M21 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignJustifyBold.displayName = 'TextAlignJustifyBold';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyBold, TextAlignJustifyBold as TextAlignJustifyBoldIcon, TextAlignJustifyBold as SiTextAlignJustifyBold };
export default TextAlignJustifyBold;
export type { TextAlignJustifyBoldProps };
