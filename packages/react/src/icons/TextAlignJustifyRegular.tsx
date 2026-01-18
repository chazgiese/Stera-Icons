import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextAlignJustifyRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyRegular = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextAlignJustifyRegular.displayName = 'TextAlignJustifyRegular';

// Triple export pattern (lucide-react style)
export { TextAlignJustifyRegular, TextAlignJustifyRegular as TextAlignJustifyRegularIcon, TextAlignJustifyRegular as SiTextAlignJustifyRegular };
export type { TextAlignJustifyRegularProps };
