import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFill = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center-fill" {...props}>
      <path d="M19 16.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3zM17 10.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignCenterFill.displayName = 'TextAlignCenterFill';

// Triple export pattern (lucide-react style)
export { TextAlignCenterFill, TextAlignCenterFill as TextAlignCenterFillIcon, TextAlignCenterFill as SiTextAlignCenterFill };
export default TextAlignCenterFill;
export type { TextAlignCenterFillProps };
