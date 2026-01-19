import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignCenterFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFill = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center-fill" {...props}>
      <path fill="currentColor" d="M19 16.5a1.5 1.5 0 0 1 0 3H5a1.5 1.5 0 0 1 0-3zM17 10.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextAlignCenterFill.displayName = 'TextAlignCenterFill';

// Triple export pattern (lucide-react style)
export { TextAlignCenterFill, TextAlignCenterFill as TextAlignCenterFillIcon, TextAlignCenterFill as SiTextAlignCenterFill };
export type { TextAlignCenterFillProps };
