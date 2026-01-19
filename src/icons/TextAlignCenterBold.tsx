import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignCenterBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterBold = memo(
  forwardRef<SVGSVGElement, TextAlignCenterBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center-bold" {...props}>
      <path fill="currentColor" d="M19 17a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM17 11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextAlignCenterBold.displayName = 'TextAlignCenterBold';

// Triple export pattern (lucide-react style)
export { TextAlignCenterBold, TextAlignCenterBold as TextAlignCenterBoldIcon, TextAlignCenterBold as SiTextAlignCenterBold };
export type { TextAlignCenterBoldProps };
