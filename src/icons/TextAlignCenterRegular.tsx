import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterRegular = memo(
  forwardRef<SVGSVGElement, TextAlignCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-center" {...props}>
      <path fill="currentColor" d="M19 17.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5zM17 11.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignCenterRegular.displayName = 'TextAlignCenterRegular';

// Triple export pattern (lucide-react style)
export { TextAlignCenterRegular, TextAlignCenterRegular as TextAlignCenterRegularIcon, TextAlignCenterRegular as SiTextAlignCenterRegular };
export default TextAlignCenterRegular;
export type { TextAlignCenterRegularProps };
