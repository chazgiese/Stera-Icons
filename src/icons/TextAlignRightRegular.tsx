import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightRegular = memo(
  forwardRef<SVGSVGElement, TextAlignRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-align-right" {...props}>
      <path d="M21 17.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignRightRegular.displayName = 'TextAlignRightRegular';

// Triple export pattern (lucide-react style)
export { TextAlignRightRegular, TextAlignRightRegular as TextAlignRightRegularIcon, TextAlignRightRegular as SiTextAlignRightRegular };
export default TextAlignRightRegular;
export type { TextAlignRightRegularProps };
